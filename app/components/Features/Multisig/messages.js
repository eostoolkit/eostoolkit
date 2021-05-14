import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for Multisig
  multisigCreateFormTransactionDetailsText: {
    id: 'app.components.Features.Multisig.multisigCreateFormTransactionDetailsText',
    defaultMessage: 'Transaction Details',
  },
  multisigCreateFormTransactionPlaceholder: {
    id: 'app.components.Features.Multisig.multisigCreateFormTransactionPlaceholder',
    defaultMessage: 'Write your transaction details here',
  },
  multisigCreateFormAuthorizationLabel: {
    id: 'app.components.Features.Multisig.multisigCreateFormAuthorizationLabel',
    defaultMessage: 'Authorization Account',
  },
  multisigCreateFormAuthorizationPlaceholder: {
    id: 'app.components.Features.Multisig.multisigCreateFormAuthorizationPlaceholder',
    defaultMessage: 'Account authorizing this transaction',
  },
  multisigCreateFormPermissionPlaceholder: {
    id: 'app.components.Features.Multisig.multisigCreateFormPermissionPlaceholder',
    defaultMessage: 'Permission for this authorization',
  },
  multisigCreateFormSubmitText: {
    id: 'app.components.Features.Multisig.multisigCreateFormSubmitText',
    defaultMessage: 'Create JSON',
  },
  multisigCreateFormHeader: {
    id: 'app.components.Features.Multisig.multisigCreateFormHeader',
    defaultMessage: 'Create Transaction',
  },
  multisigCreateFormSubHeader: {
    id: 'app.components.Features.Multisig.multisigCreateFormSubHeader',
    defaultMessage: ' - Share the resulting JSON for signing',
  },
  multisigCreateFormTutorialLine1: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine1',
    defaultMessage: 'Review the transaction details.',
  },
  multisigCreateFormTutorialLine2: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine2',
    defaultMessage:
      'Supply the single account name and permission (i.e. owner or active) that will ultimately authorize this transaction.',
  },
  multisigCreateFormTutorialLine3: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine3',
    defaultMessage: 'Click Create JSON',
  },
  multisigCreateFormTutorialLine4: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine4',
    defaultMessage:
      'A dialogue prompt will appear with the Transaction JSON. The JSON will also automatically download as a file.',
  },
  multisigCreateFormTutorialLine5: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine5',
    defaultMessage: 'Share this JSON file with each person who has to sign.',
  },
  multisigCreateFormTutorialLine6: {
    id: 'app.components.Features.Multisig.multisigCreateFormTutorialLine6',
    defaultMessage: 'Each person will sign using the Sign Transaction feature.',
  },
  multisigCreateFormNoTransactionAvailable: {
    id: 'app.components.Features.Multisig.multisigCreateFormNoTransactionAvailable',
    defaultMessage: 'No transaction available - Switch to multisig mode and use one of the toolkit features.',
  },
  multisigPushFormSignatureLabel: {
    id: 'app.components.Features.Multisig.multisigPushFormSignatureLabel',
    defaultMessage: 'Paste Signature JSON below',
  },
  multisigPushFormSignaturePlaceholder: {
    id: 'app.components.Features.Multisig.multisigPushFormSignaturePlaceholder',
    defaultMessage: 'Paste Signatures Here',
  },
  multisigFormTransactionLabel: {
    id: 'app.components.Features.Multisig.multisigFormTransactionLabel',
    defaultMessage: 'Paste Transaction JSON below',
  },
  multisigFormTransactionPlaceholder: {
    id: 'app.components.Features.Multisig.multisigFormTransactionPlaceholder',
    defaultMessage: 'Paste Transaction JSON Here',
  },
  multisigPushFormSubmitText: {
    id: 'app.components.Features.Multisig.multisigPushFormSubmitText',
    defaultMessage: 'Push Transaction',
  },
  multisigPushFormAddSignatureButton: {
    id: 'app.components.Features.Multisig.multisigPushFormAddSignatureButton',
    defaultMessage: 'Add Signature',
  },
  multisigFormLoadTransactionJSON: {
    id: 'app.components.Features.Multisig.multisigFormLoadTransactionJSON',
    defaultMessage: 'Load Transaction JSON',
  },
  multisigPushFormHeader: {
    id: 'app.components.Features.Multisig.multisigPushFormHeader',
    defaultMessage: 'Push Transaction',
  },
  multisigPushFormSubHeader: {
    id: 'app.components.Features.Multisig.multisigPushFormSubHeader',
    defaultMessage: ' - Push signed transaction to the Network',
  },
  multisigPushFormTutorialLine1: {
    id: 'app.components.Features.Multisig.multisigPushFormTutorialLine1',
    defaultMessage: 'Enter each signature seperated by commas, or use Add Signature to load each signature file.',
  },
  multisigPushFormTutorialLine2: {
    id: 'app.components.Features.Multisig.multisigPushFormTutorialLine2',
    defaultMessage: 'Load the transaction JSON',
  },
  multisigPushFormTutorialLine3: {
    id: 'app.components.Features.Multisig.multisigPushFormTutorialLine3',
    defaultMessage: 'Click Push Transaction',
  },
  multisigFormTransactionRequired: {
    id: 'app.components.Features.Multisig.multisigFormTransactionRequired',
    defaultMessage: 'Transaction is required',
  },
  multisigFormSignaturesRequired: {
    id: 'app.components.Features.Multisig.multisigFormSignaturesRequired',
    defaultMessage: 'Signatures is required',
  },
  multisigSignFormSignTransaction: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTransaction',
    defaultMessage: 'Sign Transaction',
  },
  multisigSignFormSignTransactionSubheader: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTransactionSubheader',
    defaultMessage: '- Supply the resulting JSON to the transaction sender',
  },

  multisigSignFormSignTutorialHeader: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialHeader',
    defaultMessage: 'Some Wallet Provider is required. Not the Chrome Extension.',
  },
  multisigSignFormSignTutorialLine1: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine1',
    defaultMessage: 'Load the Transaction JSON you were provided.',
  },
  multisigSignFormSignTutorialLine2: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine2',
    defaultMessage: 'Ensure your wallet is connected with the correct account to sign this transaction.',
  },
  multisigSignFormSignTutorialLine3: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine3',
    defaultMessage: 'Click Sign Transaction',
  },
  multisigSignFormSignTutorialLine4: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine4',
    defaultMessage:
      'Your wallet will appear asking you to sign an arbitrary Buffer. This will appear like random numbers. This is acceptable, and matches the JSON you loaded.',
  },
  multisigSignFormSignTutorialLine5: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine5',
    defaultMessage:
      'A dialogue will appear with your Signature, and you will also automatically download a JSON file with this signature.',
  },
  multisigSignFormSignTutorialLine6: {
    id: 'app.components.Features.Multisig.multisigSignFormSignTutorialLine6',
    defaultMessage: 'Provide this signature or signature file to the person sending the transaction.',
  },
});
