/**
 *
 * Scatter
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEosClient, makeSelectScatter, makeSelectEosAccount, makeSelectEosAuthority } from './selectors';
import { scatterLoaded } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Scatter extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (window.scatter) {
      this.props.onScatterLoaded(window.scatter);
      window.scatter = null;
    }
    document.addEventListener('scatterLoaded', () => {
      // console.log('Scatter connected')
      this.props.onScatterLoaded(window.scatter);
      // Scatter will now be available from the window scope.
      // At this stage the connection to Scatter from the application is
      // already encrypted.

      // It is good practice to take this off the window once you have
      // a reference to it.
      window.scatter = null;
    });
  }

  render() {
    if (this.props.scatter) {
      if (this.props.eosAccount) {
        return (
          <span>
            {this.props.eosAccount}
            <small>{this.props.eosAuthority ? `@${this.props.eosAuthority}` : ''}</small>
          </span>
        );
      }
      return 'Attach an Account';
    }
    return 'Please install Scatter';
  }
}

// TODO: Add prop types
Scatter.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  scatter: makeSelectScatter(),
  eosClient: makeSelectEosClient(),
  eosAccount: makeSelectEosAccount(),
  eosAuthority: makeSelectEosAuthority(),
});

function mapDispatchToProps(dispatch) {
  return {
    onScatterLoaded: scatter => dispatch(scatterLoaded(scatter)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const withReducer = injectReducer({ key: 'scatter', reducer });
const withSaga = injectSaga({ key: 'scatter', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Scatter);
