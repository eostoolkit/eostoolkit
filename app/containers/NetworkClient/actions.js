import {
  SET_SIGNER,
  LOAD_NETWORKS,
  LOADED_NETWORKS,
  READER_ENABLED,
  WRITER_ENABLED,
  WRITER_DISABLED,
  LOAD_ACCOUNT,
  LOADED_ACCOUNT,
  SET_NETWORK,
  SET_IDENTITY,
  PUSH_TRANSACTION,
  TOGGLE_OFFLINE,
} from './constants';

export function setSigner(networkSigner) {
  return {
    type: SET_SIGNER,
    networkSigner,
  };
}

export function loadNetworks() {
  return {
    type: LOAD_NETWORKS,
  };
}

export function loadedNetworks(networks, defaultNetwork) {
  return {
    type: LOADED_NETWORKS,
    networks,
    defaultNetwork,
  };
}

export function enableReader(networkReader, tokens) {
  return {
    type: READER_ENABLED,
    networkReader,
    tokens,
  };
}

export function enableWriter(networkWriter, networkIdentity) {
  return {
    type: WRITER_ENABLED,
    networkWriter,
    networkIdentity,
  };
}

export function disableWriter() {
  return {
    type: WRITER_DISABLED,
  };
}

export function loadAccount() {
  return {
    type: LOAD_ACCOUNT,
  };
}

export function loadedAccount(networkAccount) {
  return {
    type: LOADED_ACCOUNT,
    networkAccount,
  };
}

export function setNetwork(networkSelected) {
  return {
    type: SET_NETWORK,
    networkSelected,
  };
}

export function setIdentity() {
  return {
    type: SET_IDENTITY,
  };
}

export function pushTransaction(transaction,history) {
  return {
    type: PUSH_TRANSACTION,
    transaction,
    history,
  };
}

export function toggleOffline() {
  return {
    type: TOGGLE_OFFLINE,
  };
}
