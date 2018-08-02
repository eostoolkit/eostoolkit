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
} from 'containers/NetworkClient/selectors';
import CheckCircle from '@material-ui/icons/CheckCircle';
import HighlightOff from '@material-ui/icons/HighlightOff';
import CircularProgress from '@material-ui/core/CircularProgress';

const status = (enabled, loading) => {
  if (enabled) return <CheckCircle />;
  if (loading) return <CircularProgress size={20} color="inherit" />;
  return <HighlightOff />;
};

const NetworkStatus = props => {
  return (
    <div>
      Read: {status(props.readerEnabled, props.readerLoading)} Write: {status(props.writerEnabled, props.writerLoading)}{' '}
      Account: {status(props.accountEnabled, props.accountLoading)}
    </div>
  );
};

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
