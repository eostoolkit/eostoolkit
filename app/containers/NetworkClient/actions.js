import {
  SET_SIGNER,
  LOAD_NETWORKS,
  LOADED_NETWORKS,
  UPDATE_NETWORKS,
  READER_ENABLED,
  WRITER_ENABLED,
  WRITER_DISABLED,
  LOAD_ACCOUNT,
  LOADED_ACCOUNT,
  SET_NETWORK,
  SET_IDENTITY,
  PUSH_TRANSACTION,
  TOGGLE_OFFLINE,
  LOADED_REX,
  TRIGGER_UPDATE_REX,
  TRIGGER_FETCH_TOKEN_LIST,
  UPDATE_TOKEN_LIST,
} from "./constants";

export function setSigner(networkSigner) {
  return {
    type: SET_SIGNER,
    networkSigner,
  };
}

export function loadNetworks(filter) {
  return {
    type: LOAD_NETWORKS,
    filter,
  };
}

export function loadedNetworks(networks, defaultNetwork) {
  return {
    type: LOADED_NETWORKS,
    networks,
    defaultNetwork,
  };
}

export function updateNetworks(networks) {
  return {
    type: UPDATE_NETWORKS,
    networks,
  };
}

export function enableReader(networkReader, tokens, claims) {
  return {
    type: READER_ENABLED,
    networkReader,
    tokens,
    claims,
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

export function setNetwork(networkSelected, override) {
  return {
    type: SET_NETWORK,
    networkSelected,
    override,
  };
}

export function setIdentity() {
  return {
    type: SET_IDENTITY,
  };
}

export function pushTransaction(transaction, history) {
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

export function loadedRex(rex) {
  return {
    type: LOADED_REX,
    rex,
  };
}

export function triggerUpdateRex() {
  return {
    type: TRIGGER_UPDATE_REX,
  };
}

export function triggerFetchTokenList() {
  return {
    type: TRIGGER_FETCH_TOKEN_LIST,
  };
}

export function updateTokenList(data) {
  return {
    type: UPDATE_TOKEN_LIST,
    tokens: data,
  };
}
