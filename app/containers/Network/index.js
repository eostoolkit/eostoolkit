/**
 *
 * Airgrab
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import NetworkForm from 'components/Features/NetworkForm';
import { makeSelectNetworks, makeSelectActiveNetwork } from 'containers/NetworkClient/selectors';
import { setNetwork } from 'containers/NetworkClient/actions';

const mapStateToProps = createStructuredSelector({
  networks: makeSelectNetworks(),
  active: makeSelectActiveNetwork(),
});

function mapDispatchToProps(dispatch) {
  return {
    selectNetwork: (network, endpoint) => dispatch(setNetwork({ network, endpoint }, true)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(NetworkForm);
