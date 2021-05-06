import { Api, JsonRpc, RpcError } from 'eosjs';
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
    const httpEndpoint = `${activeNetwork.endpoint.protocol}://${activeNetwork.endpoint.url}:${activeNetwork.endpoint.port}`;
    const rpc = new JsonRpc(httpEndpoint);
    
    const networkOptions = {
      rpc: rpc,
      chainId: activeNetwork.network.chainId,
      
      // broadcast: false,
      // sign: false,
      // keyPrefix: activeNetwork.network.prefix || 'EOS',
    };

    //const networkReader = yield Api(networkOptions);
    const tokens = [];//yield call(fetchTokens, networkReader);
    const claims = yield call(fetchClaims);

    yield put(enableReader(rpc, tokens, claims));
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}

// this is triggered by the buildDispatcher
export function* storageReader(activeNetwork) {
  try {
    const endpointStorage = activeNetwork.network.name + '@_' + activeNetwork.network.network + '@_' + activeNetwork.network.type + '@_' + activeNetwork.endpoint.name
    localStorage.setItem('networkStorage', endpointStorage)
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
    const httpEndpoint = `${activeNetwork.endpoint.protocol}://${activeNetwork.endpoint.url}:${activeNetwork.endpoint.port}`;
    const rpc = new JsonRpc(httpEndpoint);

    const signerClientConfig = {
      protocol: activeNetwork.endpoint.protocol,
      blockchain: activeNetwork.network.network,
      host: activeNetwork.endpoint.url,
      port: activeNetwork.endpoint.port,
      chainId: activeNetwork.network.chainId,
      // keyPrefix: activeNetwork.network.prefix || 'EOS'
    };

    const networkOptions = {
      // broadcast: true,
      // sign: true,
      // chainId: activeNetwork.network.chainId,
      // keyPrefix: activeNetwork.network.prefix || 'EOS',
      rpc: rpc,
      beta3: true
    };
    const protocol = activeNetwork.endpoint.protocol;
    //const networkWriter = signer.eos(signerClientConfig, Api, networkOptions, protocol);
    const networkWriter = signer.eos(signerClientConfig, Api, networkOptions);
    const identity = yield call(fetchIdentity, signer, activeNetwork);
    console.log("Identity Builder", identity)
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
