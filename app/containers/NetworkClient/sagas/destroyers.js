import { select } from 'redux-saga/effects';
import { makeSelectSigner } from '../selectors';

export function* destroyIdentity() {
  try {
    const signer = yield select(makeSelectSigner());
    yield signer.forgetIdentity();
  } catch (err) {
    console.error('An EOSToolkit error occured - see details below:');
    console.error(err);
  }
}
