// save the signature provider to state... possible change providers in future
// provider setting should be instantaneos... new need for a loader
export const SET_SIGNER = "app/NetworkClient/SET_SIGNER";

// load available networks from remote source
export const LOAD_NETWORKS = "app/NetworkClient/LOAD_NETWORKS";
export const LOADED_NETWORKS = "app/NetworkClient/LOADED_NETWORKS";
export const REFRESH_NETWORKS = "app/NetworkClient/REFRESH_NETWORKS";
export const UPDATE_NETWORKS = "app/NetworkClient/UPDATE_NETWORKS";

// create a Network Reader Client
export const MAKE_READER = "app/NetworkClient/MAKE_READER";
export const READER_ENABLED = "app/NetworkClient/READER_ENABLED";

// create a Network Writer Client
export const MAKE_WRITER = "app/NetworkClient/MAKE_WRITER";
export const WRITER_ENABLED = "app/NetworkClient/WRITER_ENABLED";
export const WRITER_DISABLED = "app/NetworkClient/WRITER_DISABLED";

// get the account associated with identity
export const LOAD_ACCOUNT = "app/NetworkClient/LOAD_ACCOUNT";
export const LOADED_ACCOUNT = "app/NetworkClient/LOADED_ACCOUNT";

// user intervention set network or identity
export const SET_NETWORK = "app/NetworkClient/SET_NETWORK";
export const SET_IDENTITY = "app/NetworkClient/SET_IDENTITY";

// push transaction to the network
export const PUSH_TRANSACTION = "app/NetworkClient/PUSH_TRANSACTION";

// push transaction to the network
export const TOGGLE_OFFLINE = "app/NetworkClient/TOGGLE_OFFLINE";

// get REX information
export const LOADED_REX = "app/NetworkClient/LOADED_REX";
export const TRIGGER_UPDATE_REX = "app/NetworkClient/TRIGGER_UPDATE_REX";

// get Token information
export const UPDATE_TOKEN_LIST = "app/NetworkClient/UPDATE_TOKEN_LIST";
export const TRIGGER_FETCH_TOKEN_LIST = "app/NetworkClient/FETCH_TOKEN_LIST";
