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

import Create from '@material-ui/icons/Create';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import Button from 'components/CustomButtons/Button';
import ReactFileReader from 'react-file-reader';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { signTransaction } from 'containers/OfflineClient/actions';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
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
    submitText: intl.formatMessage(messages.multisigSignFormSignTransaction),
  };

  const handleFiles = files => {
    const reader = new FileReader();
    reader.onload = function(e) {
      console.log(reader.result);
      props.setValues({
        transaction: reader.result,
      });
    };
    reader.readAsText(files[0]);
    console.log(files);
  };

  return (
    <ToolForm {...formProps}>
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleFiles} fileTypes=".json,.txt">
          <Button>
            <FormattedMessage {...messages.multisigFormLoadTransactionJSON} />
          </Button>
        </ReactFileReader>
      </ToolSection>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const MultisigSign = props => {
  const { transaction, intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Create}
          header={intl.formatMessage(messages.multisigSignFormSignTransaction)}
          subheader={intl.formatMessage(messages.multisigSignFormSignTransactionSubheader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <h5>
            <FormattedMessage {...messages.multisigSignFormSignTutorialHeader} />
          </h5>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine1} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine2} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine3} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine4} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine5} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigSignFormSignTutorialLine6} />
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
    handleTransaction: data => dispatch(signTransaction(data)),
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
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        transaction: Yup.string().required(intl.formatMessage(messages.multisigFormTransactionRequired)),
      });
    },
  })
);

export default enhance(MultisigSign);
