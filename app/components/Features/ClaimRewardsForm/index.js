/**
 *
 * DelegateForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AttachMoney from '@material-ui/icons/AttachMoney';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'claimrewards',
      data: { owner: values.owner },
    },
  ];
  return transaction;
};

const ClaimRewardsForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={AttachMoney}
          header={intl.formatMessage(messages.claimRewardsHeader)}
          subheader={intl.formatMessage(messages.claimRewardsSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <p>
            <FormattedMessage {...commonMessages.tutorialComingSoonMessage} />
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
        owner: Yup.string().required(intl.formatMessage(commonMessages.formOwnerNameRequired)),
      });
    },
  })
);

export default enhance(ClaimRewardsForm);
