import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSigner, makeSelectIdentity } from 'containers/NetworkClient/selectors';

const NetworkIdentity = props => {
  const { signer, identity } = props;
  if (signer && !identity) return 'Please attach Identity';
  if (signer && identity) return `${identity.actor}@${identity.permission}`;
  return 'Please install Scatter';
};

const mapStateToProps = createStructuredSelector({
  signer: makeSelectSigner(),
  identity: makeSelectIdentity(),
});

export default connect(
  mapStateToProps,
  null
)(NetworkIdentity);
