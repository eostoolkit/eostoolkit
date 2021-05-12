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
    const url = new URL(window.document.location.href);
    const filter = new URLSearchParams(url.searchParams);
    this.props.loadNetworks(filter);

    // ScatterJS.plugins( new ScatterEOS() );
    // ScatterJS.scatter.connect('EOSToolkit').then(connected => {
    //   if(connected){
    //       this.props.setSigner(ScatterJS.scatter);
    //       window.ScatterJS = null;
    //   }
    // });

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
    loadNetworks: filter => dispatch(loadNetworks(filter)),
    loadAccount: () => dispatch(loadAccount()),
    setSigner: signer => dispatch(setSigner(signer)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'NetworkClient', saga });

export default compose(withSaga, withConnect)(NetworkClient);
