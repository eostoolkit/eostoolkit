
import { fromJS } from 'immutable';
import {
  SET_SIGNER,
  LOADED_NETWORKS,
  READER_ENABLED,
  WRITER_ENABLED,
  WRITER_DISABLED,
  LOAD_ACCOUNT,
  LOADED_ACCOUNT,
  SET_NETWORK,
  SET_IDENTITY,
} from './constants';

const initialState = fromJS({
  readerLoading : true,
  writerLoading: true,
  accountLoading: false,
  networkSigner: false,
  networkReader: null,
  networkWriter: null,
  networkIdentity: null,
  networkAccount: null,
  networkSelected: null,
  networks: [],
  tokens: [],
});

function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNER:
      return state.set('networkSigner', action.networkSigner);
    case LOADED_NETWORKS:
      return state
        .set('networks', action.networks)
        .set('networkSelected', action.defaultNetwork);
    case READER_ENABLED:
      return state
        .set('networkReader', action.networkReader)
        .set('tokens', action.tokens)
        .set('readerLoading', false);
    case WRITER_ENABLED:
      return state
        .set('networkWriter', action.networkWriter)
        .set('networkIdentity', action.networkIdentity)
        .set('writerLoading', false);
    case WRITER_DISABLED:
      return state
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('networkIdentity', null)
        .set('writerLoading', false);
    case LOAD_ACCOUNT:
      return state.set('accountLoading', true);
    case LOADED_ACCOUNT:
      return state
        .set('networkAccount', action.networkAccount)
        .set('accountLoading', false);
    case SET_NETWORK:
      return state
        .set('networkSelected', action.networkSelected)
        .set('networkReader', null)
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('readerLoading', true)
        .set('writerLoading', true);
    case SET_IDENTITY:
      return state
        .set('networkWriter', null)
        .set('networkAccount', null)
        .set('writerLoading', true);
    default:
      return state;
  }
}

export default clientReducer;
