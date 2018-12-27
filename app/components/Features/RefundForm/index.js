/**
 *
 * ForumStatusForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'owner',
      label: intl.formatMessage(messages.refundFormOwnerLabel),
      placeholder: intl.formatMessage(messages.refundFormOwnerPlaceholder),
      md: 12,
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(commonMessages.submitButtonText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'refund',
      data: {
        ...values,
      },
    },
  ];
  return transaction;
};

const RefundForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Undo}
          header={intl.formatMessage(messages.refundFormHeader)}
          subheader={intl.formatMessage(messages.refundFormSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <h5>
            <FormattedMessage {...messages.refundStakeHeader} />
          </h5>
          <p>
            <FormattedMessage {...messages.refundStakeTextRow1} />
          </p>
          <p>
            <FormattedMessage {...messages.refundStakeTextRow2} />
          </p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
      });
    },
  })
);

export default enhance(RefundForm);
