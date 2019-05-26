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

import Undo from '@material-ui/icons/Undo';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeSellRexTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'sellrex',
      data: {
        from: values.owner,
        rex: `${Number(values.rex)
          .toFixed(4)
          .toString()} 'REX'`,
      },
    },
  ];
  return transaction;
};

const makeWithdrawTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'withdraw',
      data: {
        owner: values.owner,
        rex: `${Number(values.rex)
          .toFixed(4)
          .toString()} 'EOS'`,
      },
    },
  ];
  return transaction;
};

const makeUpdateRexTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'updaterex',
      data: {
        owner: values.owner,
      },
    },
  ];
  return transaction;
};

const SellForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Undo}
      header={intl.formatMessage(messages.rexSellFormHeader)}
      subheader={intl.formatMessage(messages.rexSellFormHeaderSubheader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const sellTransaction = makeSellRexTransaction(values);
      const updateTransaction = makeUpdateRexTransaction(values);
      const withdrawTransaction = makeWithdrawTransaction(values);
      setSubmitting(false);
      pushTransaction(updateTransaction, props.history);
      pushTransaction(sellTransaction, props.history);
      pushTransaction(withdrawTransaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      rex: '0',
      activeNetwork: props.activeNetwork ? props.activeNetwork : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formOwnerNameRequired)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        rex: Yup.number()
          .notRequired()
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
      });
    },
  })
);

export default enhance(SellForm);
