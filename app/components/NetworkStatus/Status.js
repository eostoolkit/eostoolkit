import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectReaderLoading,
  makeSelectWriterLoading,
  makeSelectAccountLoading,
  makeSelectReaderEnabled,
  makeSelectWriterEnabled,
  makeSelectAccountEnabled,
} from 'containers/NetworkClient/selectors'

const status = (enabled, loading) => {
  if(enabled) return ('EN');
  if(loading) return ('LD');
  return ('NA');
}

const NetworkStatus = (props) => {
  return (
    `Read: ${status(props.readerEnabled,props.readerLoading)},
    Write: ${status(props.writerEnabled,props.writerLoading)},
    Acct: ${status(props.accountEnabled,props.accountLoading)}`
  );
}

const mapStateToProps = createStructuredSelector({
  readerLoading: makeSelectReaderLoading(),
  writerLoading: makeSelectWriterLoading(),
  accountLoading: makeSelectAccountLoading(),
  readerEnabled: makeSelectReaderEnabled(),
  writerEnabled: makeSelectWriterEnabled(),
  accountEnabled: makeSelectAccountEnabled(),
});


export default connect(
  mapStateToProps,
  null
)(NetworkStatus);
