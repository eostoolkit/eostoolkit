/**
 *
 * Airgrab
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import NetworkForm from 'components/NetworkForm';
import { makeSelectNetworks, makeSelectActiveNetwork } from 'containers/Remote/selectors';
import { selectNetwork } from 'containers/Remote/actions';

const mapStateToProps = createStructuredSelector({
  networks: makeSelectNetworks(),
  active: makeSelectActiveNetwork(),
});

function mapDispatchToProps(dispatch) {
  return {
    selectNetwork: (network, endpoint) => dispatch(selectNetwork(network, endpoint)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(NetworkForm);
