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
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs2';
import { setSigner, loadNetworks, loadAccount } from './actions';
import saga from './sagas/watchers';



// we inject out reducer at the root level for lazy loading order reasons

export class NetworkClient extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // start loading the reader asap
    this.props.loadNetworks();

    ScatterJS.plugins( new ScatterEOS() );
    console.log("@@@ Connecting to Scatter");
    ScatterJS.scatter.connect('EOSToolkit').then(connected => {
      console.log("@@@ Connecting to Scatter, result", connect);
      if(connected){
          this.props.setSigner(ScatterJS.scatter);
          window.ScatterJS = null;
      }
    });

    //this.interval = setInterval(() => this.props.loadAccount(), 10000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return '';
  }
}

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    loadNetworks: () => dispatch(loadNetworks()),
    loadAccount: () => dispatch(loadAccount()),
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
