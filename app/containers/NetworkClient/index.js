/**
 *
 * NetworkClient
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import { setSigner, loadNetworks } from './actions';
import saga from './sagas/watchers';

// we inject out reducer at the root level for lazy loading order reasons

export class NetworkClient extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // start loading the reader asap
    this.props.loadNetworks();

    if (window.scatter) {
      // console.log('Scatter already connected');
      this.props.setSigner(window.scatter);
      window.scatter = null;
    }
    document.addEventListener('scatterLoaded', () => {
      // console.log('Scatter connected');
      this.props.setSigner(window.scatter);
      window.scatter = null;
    });
  }

  render() {
    return '';
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    loadNetworks: () => dispatch(loadNetworks()),
    setSigner: signer => dispatch(setSigner(signer)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withSaga = injectSaga({ key: 'NetworkClient', saga });

export default compose(
  withSaga,
  withConnect
)(NetworkClient);
