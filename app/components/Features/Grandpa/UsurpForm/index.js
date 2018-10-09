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
import Favorite from '@material-ui/icons/Favorite';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

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

const validationSchema = Yup.object().shape({
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const DonateForm = props => {
  return (
        <ToolBody color="danger" icon={TrendingUp} header="Usurp the Chief" subheader=" - Earn 10% fees from all activity">
          <p>Pay the Usurp Fee to become Chief Miner!</p>
          <p>The Chief Miner earns 10% on mining and transfers by all others!</p>
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
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: () => ({
      quantity: '1',
      memo: '',
    }),
    validationSchema,
  })
);

export default enhance(DonateForm);
