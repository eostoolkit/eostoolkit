import { put, select, spawn } from 'redux-saga/effects';
import { buildReader, buildWriter, storageReader } from './builders';
import { makeSelectSigner, makeSelectActiveNetwork, makeSelectReader, makeSelectWriter } from '../selectors';
import { loadAccount, disableWriter } from '../actions';

/*
*
* DISPATCHERS
* Ensure parallel events have all completed
*
*/

export function* buildDispatcher() {
  const signer = yield select(makeSelectSigner());
  const network = yield select(makeSelectActiveNetwork());
  // build only dispatches if we do have networks and signer
  if (network) {
    yield spawn(buildReader, network);
    yield spawn(storageReader, network);
  }

  
  if (signer.identity && network) {
    yield spawn(buildWriter, signer, network);
    // yield put(disableWriter());
  } else {
    yield put(disableWriter());
  }
}

export function* writerDispatcher() {
  const signer = yield select(makeSelectSigner());
  const network = yield select(makeSelectActiveNetwork());
  // build only dispatches if we do have networks and signer

  if (signer && network) {
    yield spawn(buildWriter, signer, network);
  }
}

export function* accountDispatcher() {
  const reader = yield select(makeSelectReader());
  const writer = yield select(makeSelectWriter());
  // account only dispatched if we have both a reader and writer
  if (reader && writer) {
    yield put(loadAccount());
  }
}
