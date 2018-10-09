import { makeSelectReader, makeSelectIdentity } from 'containers/NetworkClient/selectors';
import { takeLatest, call, put, select, all, fork, join } from 'redux-saga/effects';
import { FETCH_MINER } from './constants';
import { fetchedMiner } from './actions';

const minerTable = {
    json: true,
    scope: 'grandpacoins',
    code: 'grandpacoins',
    table: 'miner',
}

const statsTable = {
    json: true,
    //scope: BTC,ETH,DOGE
    code: 'grandpacoins',
    table: 'stat',
}

const balanceTable = {
    json: true,
    //scope: accountname
    code: 'grandpacoins',
    table: 'accounts',
}

function* getStats(token,round,balance) {
  const networkReader = yield select(makeSelectReader());
  try {
    const table = {
      ...statsTable,
      scope: token
    };
    const tokenTable = yield networkReader.getTableRows(table);
    const tokenRow = tokenTable.rows[0];
    const { last_transfer, supply } = tokenRow;
    const roundVelocity = tokenRow.most_velocity.find(r=>r.mining_round === round);
    const roundQuantity = tokenRow.most_quantity.find(r=>r.mining_round === round);
    const velocity = roundVelocity ? roundVelocity.highscore : null;
    const quantity = roundQuantity ? roundQuantity.highscore : null;
    let balanceData = {
      balance: 'Mine to play!',
      claimed: null,
      lastMined: null,
      velocity:0,
      quantity:`0.0000 ${token}`,
      referrer:null,
    }

    if(balance) {
      const activity = balance.activity.find(r=>r.mining_round === round);
      balanceData.balance = balance.balance;
      balanceData.claimed = balance.claimed === 1 ? true  : false;
      balanceData.lastMined = new Date(balance.last_mined_on/1000).toLocaleString();
      balanceData.velocity = activity ? activity.activity.velocity : null;
      balanceData.quantity = activity ? activity.activity.quantity : null;
      balanceData.referrer = balance.referrer;
    }

    return { token,supply,last_transfer,velocity,quantity,account:balanceData };
  } catch(err) {
    return null;
  }
}

//
// Get the game miner
//
function* getMiner() {
  try {
    const networkReader = yield select(makeSelectReader());
    const currentIdentity = yield select(makeSelectIdentity());

    const minerData = yield networkReader.getTableRows(minerTable);
    const { rewards, ...other} = minerData.rows[0];
    const rewardData = rewards.find(r=>r.mining_round === other.mining_round);

    const table = {
      ...balanceTable,
      scope: currentIdentity.name
    }

    const accountData = yield networkReader.getTableRows(table);
    //console.log(accountData);

    const tokenList = ['BTC','ETH','DOGE'];

    const statsTables = yield all(
      tokenList.map(token => {
        const balance = accountData.rows.find(r=>r.balance.split(' ')[1] === token);
        return fork(getStats, token, other.mining_round, balance);
      })
    );
    const stats = yield join(...statsTables);
    const round = {
      ...other,
      rewards: rewardData ? rewardData.rewards : {dev_fund:0,carry_forward:0,team_div:0,jackpot:0}
    }

    yield put(fetchedMiner({round,stats}));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

function* watchFetchMiner() {
  yield takeLatest(FETCH_MINER, getMiner);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchFetchMiner()]);
}
