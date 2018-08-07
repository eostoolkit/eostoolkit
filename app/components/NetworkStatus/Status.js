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
      <span title="If READ is not ticked, it means the selected mainnet endpoint could not be accessed. Either your internet is restricted or the selected endpoint is down. Try selecting a different endpoint via 'Change network' menu above.">Read: {status(props.readerEnabled, props.readerLoading)}{' '}</span> 
      <span title="If WRITE access is not ticked, make sure scatter is configured with a valid network and that network is also linked to your scatter identity.">Write: {status(props.writerEnabled, props.writerLoading)}{' '}</span>
      <span title="If ACCOUNT is not ticked make sure to use the 'Select account' menu above and select a scatter identity and account to perform actions under.">Account: {status(props.accountEnabled, props.accountLoading)}</span>
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
