/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

// @material-ui/icons
import TrendingUp from '@material-ui/icons/TrendingUp';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransaction = (values, networkIdentity) => {
  const transaction = [
    {
      account: 'eosio.token',
      name: 'transfer',
      data: {
        from: networkIdentity ? networkIdentity.name : '',
        to: 'grandpacoins',
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(4)
          .toString()} EOS`,
      },
    },
  ];
  return transaction;
};

const DonateForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="danger"
      icon={TrendingUp}
      header={intl.formatMessage(messages.grandpaUsurpFormHeader)}
      subheader={intl.formatMessage(messages.grandpaUsurpFormSubHeader)}>
      <p>
        <FormattedMessage {...messages.grandpaUsurpFormDonateText1} />
      </p>
      <p>
        <FormattedMessage {...messages.grandpaUsurpFormDonateText2} />
      </p>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, networkIdentity } = props;
      const transaction = makeTransaction(values, networkIdentity);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: () => ({
      quantity: '1',
      memo: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        memo: Yup.string(),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(DonateForm);
