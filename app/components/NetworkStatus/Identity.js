import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSigner, makeSelectIdentity } from 'containers/NetworkClient/selectors';

import { injectIntl } from 'react-intl';
import messages from './messages';

const NetworkIdentity = props => {
  const { signer, identity, intl } = props;
  if (signer && !identity) return intl.formatMessage(messages.attachAccountText);
  if (signer && identity) return `${identity.name}@${identity.authority}`;
  return intl.formatMessage(messages.installScatterText);
};

const mapStateToProps = createStructuredSelector({
  signer: makeSelectSigner(),
  identity: makeSelectIdentity(),
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(NetworkIdentity));
