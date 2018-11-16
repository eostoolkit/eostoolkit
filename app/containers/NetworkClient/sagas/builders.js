import Eos from 'eosjs';
import { put, call } from 'redux-saga/effects';
import { fetchTokens, fetchClaims, fetchIdentity } from './fetchers';
import { enableReader, enableWriter, disableWriter } from '../actions';

/*
*
* BUILD READER
* Create reader and fetch tokens
*
*/

// this is triggered by the buildDispatcher
export function* buildReader(activeNetwork) {
  try {
    const networkOptions = {
      broadcast: false,
      sign: false,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'EOS',
      httpEndpoint: `${activeNetwork.endpoint.protocol}://${activeNetwork.endpoint.url}:${activeNetwork.endpoint.port}`,
    };

    const networkReader = yield Eos(networkOptions);
    const tokens = [];//yield call(fetchTokens, networkReader);
    const claims = yield call(fetchClaims);

    yield put(enableReader(networkReader, tokens, claims));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

/*
*
* BUILD WRITER
* Create writer and fetch identity
*
*/

// this is triggered by the buildDispatcher
export function* buildWriter(signer, activeNetwork) {
  try {
    const signerClientConfig = {
      protocol: activeNetwork.endpoint.protocol,
      blockchain: activeNetwork.network.network,
      host: activeNetwork.endpoint.url,
      port: activeNetwork.endpoint.port,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'EOS'
    };

    const networkOptions = {
      broadcast: true,
      sign: true,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'EOS'
    };
    const protocol = activeNetwork.endpoint.protocol;
    const networkWriter = signer.eos(signerClientConfig, Eos, networkOptions, protocol);
    const identity = yield call(fetchIdentity, signer, activeNetwork);

    if (identity) {
      yield put(enableWriter(networkWriter, identity));
    } else {
      yield put(disableWriter());
    }
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}
