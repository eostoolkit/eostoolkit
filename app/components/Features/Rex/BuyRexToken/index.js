/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 20.05.19
 * Version: 1.0
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Redo from '@material-ui/icons/Redo';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransferTransaction = (values, networkAccount) => {
  const token = networkAccount.balances.find(tk => tk.symbol === 'EOS');
  const precision = token.amount.split('.')[1] ? token.amount.split('.')[1].length : 0;
  const transaction = [
    {
      account: 'eosio.token',
      name: 'transfer',
      data: {
        from: networkAccount.account_name,
        to: 'eosio.rex',
        memo: 'deposit to REX fund',
        quantity: `${Number(values.quantity)
          .toFixed(precision)
          .toString()} ${values.symbol}`,
      },
    },
  ];
  return transaction;
};

const makeBuyRexTransaction = (values, networkAccount) => {
  const token = networkAccount.balances.find(tk => tk.symbol === 'EOS');
  const precision = token.amount.split('.')[1] ? token.amount.split('.')[1].length : 0;
  const transaction = [
    {
      account: 'eosio',
      name: 'buyrex',
      data: {
        from: networkAccount.account_name,
        amount: `${Number(values.quantity)
          .toFixed(precision)
          .toString()} ${values.symbol}`,
      },
    },
  ];
  return transaction;
};

const BuyFromTokenForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Redo}
      header={intl.formatMessage(messages.rexBuyFormHeader)}
      subheader={intl.formatMessage(messages.rexBuyTokenFormHeaderSubheader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, networkAccount } = props;
      const transferTransaction = makeTransferTransaction(values, networkAccount);
      const buyRexTransaction = makeBuyRexTransaction(values, networkAccount);
      setSubmitting(false);
      pushTransaction(transferTransaction, props.history);
      pushTransaction(buyRexTransaction, props.history);
    },
    mapPropsToValues: props => ({
      liquid: '0',
      activeNetwork: props.activeNetwork ? props.activeNetwork : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        liquid: Yup.number()
          .required()
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
      });
    },
  })
);

export default enhance(BuyFromTokenForm);
