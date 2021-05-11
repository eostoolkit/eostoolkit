import { createSelector } from 'reselect';

const selectClientState = state => state.get('networkClient');

/**
 * Direct state selectors
 */

const makeSelectSigner = () => createSelector(selectClientState, substate => substate.get('networkSigner'));
const makeSelectReader = () => createSelector(selectClientState, substate => substate.get('networkReader'));
const makeSelectWriter = () => createSelector(selectClientState, substate => substate.get('networkWriter'));
const makeSelectIdentity = () => createSelector(selectClientState, substate => substate.get('networkIdentity'));
const makeSelectAccount = () => createSelector(selectClientState, substate => substate.get('networkAccount'));
const makeSelectActiveNetwork = () => createSelector(selectClientState, substate => substate.get('networkSelected'));
const makeSelectNetworks = () => createSelector(selectClientState, substate => substate.get('networks'));
const makeSelectTokens = () => createSelector(selectClientState, substate => substate.get('tokens'));
const makeSelectClaims = () => createSelector(selectClientState, substate => substate.get('claims'));
const makeSelectTransaction = () => createSelector(selectClientState, substate => substate.get('transaction'));
const makeSelectOffline = () => createSelector(selectClientState, substate => substate.get('offlineMode'));
const makeSelectSwitchTime = () => createSelector(selectClientState, substate => substate.get('networkSwitchTime'));
const makeSelectRex = () => createSelector(selectClientState, substate => substate.get('rex'));
const makeSelectFlareDataTokens = () => createSelector(selectClientState, substate => substate.get('flareDataTokens'));
/**
 * loading selectors
 */

const makeSelectReaderLoading = () => createSelector(selectClientState, substate => substate.get('readerLoading'));
const makeSelectWriterLoading = () => createSelector(selectClientState, substate => substate.get('writerLoading'));
const makeSelectAccountLoading = () => createSelector(selectClientState, substate => substate.get('accountLoading'));

/**
 * Enabled selectors
 */

const makeSelectReaderEnabled = () =>
  createSelector(selectClientState, substate => {
    if (!substate) return false;
    const loading = substate.get('readerLoading');
    const reader = substate.get('networkReader');
    return reader !== null && !loading;
  });

const makeSelectWriterEnabled = () =>
  createSelector(selectClientState, substate => {
    if (!substate) return false;
    const loading = substate.get('writerLoading');
    const writer = substate.get('networkWriter');
    return writer !== null && !loading;
  });

const makeSelectAccountEnabled = () =>
  createSelector(selectClientState, substate => {
    if (!substate) return false;
    const loading = substate.get('accountLoading');
    const account = substate.get('networkAccount');
    return account !== null && !loading;
  });

/**
 * Default selector
 */

export default selectClientState;

export {
  selectClientState,
  makeSelectSigner,
  makeSelectReader,
  makeSelectWriter,
  makeSelectIdentity,
  makeSelectAccount,
  makeSelectActiveNetwork,
  makeSelectNetworks,
  makeSelectTokens,
  makeSelectClaims,
  makeSelectReaderLoading,
  makeSelectWriterLoading,
  makeSelectAccountLoading,
  makeSelectReaderEnabled,
  makeSelectWriterEnabled,
  makeSelectAccountEnabled,
  makeSelectTransaction,
  makeSelectOffline,
  makeSelectRex,
  makeSelectFlareDataTokens,
};
