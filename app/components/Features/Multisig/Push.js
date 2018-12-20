/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Send from '@material-ui/icons/Send';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import Button from 'components/CustomButtons/Button';
import ReactFileReader from 'react-file-reader';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { pushTransaction } from 'containers/OfflineClient/actions';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'signatures',
      label: intl.formatMessage(messages.multisigPushFormSignatureLabel),
      placeholder: intl.formatMessage(messages.multisigPushFormSignaturePlaceholder),
      multiline: true,
      rows: 5,
      md: 12,
    },
    {
      id: 'transaction',
      label: intl.formatMessage(messages.multisigFormTransactionLabel),
      placeholder: intl.formatMessage(messages.multisigFormTransactionPlaceholder),
      multiline: true,
      rows: 30,
      md: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.multisigPushFormSubmitText),
  };

  const handleFiles = files => {
    try {
      const reader = new FileReader();
      reader.onload = function(e) {
        const values = props.values;
        props.setValues({
          signatures: values.signatures,
          transaction: reader.result,
        });
      };
      reader.readAsText(files[0]);
    } catch (c) {
      // something went wrong
    }
  };

  const handleSigs = files => {
    try {
      const values = props.values;
      const curr = values.signatures
        ? values.signatures
            .replace(/[\n\r]/g, '')
            .trim()
            .split(',')
        : [];

      const reader = new FileReader();

      reader.onload = function(e) {
        curr.push(JSON.parse(reader.result));

        const signatures = curr.sort().join(',\n');

        props.setValues({
          signatures,
          transaction: values.transaction,
        });
      };

      reader.readAsText(files[0]);
    } catch (c) {
      // something went wrong
    }
  };

  return (
    <ToolForm {...formProps}>
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleSigs} fileTypes=".json,.txt">
          <Button>
            <FormattedMessage {...messages.multisigPushFormAddSignatureButton} />
          </Button>
        </ReactFileReader>
      </ToolSection>
      <ToolInput {...FormData[0]} {...props} />
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleFiles} fileTypes=".json,.txt">
          <Button>
            <FormattedMessage {...messages.multisigFormLoadTransactionJSON} />
          </Button>
        </ReactFileReader>
      </ToolSection>
      <ToolInput {...FormData[1]} {...props} />
    </ToolForm>
  );
};

const MultisigPush = props => {
  const { transaction, intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Send}
          header={intl.formatMessage(messages.multisigPushFormHeader)}
          subheader={intl.formatMessage(messages.multisigPushFormSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <p>
            <FormattedMessage {...messages.multisigPushFormTutorialLine1} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigPushFormTutorialLine2} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigPushFormTutorialLine3} />
          </p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  transaction: makeSelectTransaction(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleTransaction: data => dispatch(pushTransaction(data)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { handleTransaction } = props;
      setSubmitting(false);
      handleTransaction(values);
    },
    mapPropsToValues: props => ({
      transaction: '',
      signatures: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        transaction: Yup.string().required(intl.formatMessage(messages.multisigFormTransactionRequired)),
        signatures: Yup.string().required(intl.formatMessage(messages.multisigFormSignaturesRequired)),
      });
    },
  })
);

export default enhance(MultisigPush);
