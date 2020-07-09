/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import SupervisorAccount from '@material-ui/icons/SupervisorAccount';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import { FormattedMessage } from 'react-intl';

import FormObject from './FormObject';

import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'voteproducer',
      data: {
        voter: values.owner,
        proxy: values.name,
      },
    },
  ];
  return transaction;
};

const SetProxyForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={SupervisorAccount}
          header={intl.formatMessage(messages.proxyFormHeader)}
          subheader={intl.formatMessage(messages.proxyFormSubHeader)}>
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
      name: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(messages.proxyNameRequired)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
      });
    },
  })
);

export default enhance(SetProxyForm);
