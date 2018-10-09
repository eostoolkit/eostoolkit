/**
 *
 * BuyRamForm
 *
 */

import React from 'react';
import { compose, withStateHandlers, mapProps } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Send from '@material-ui/icons/Send';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const makeTransaction = (values, token, networkIdentity) => {
  const transaction = [
    {
      account: 'grandpacoins',
      name: 'transfer',
      data: {
        from: networkIdentity ? networkIdentity.name : '',
        to: values.name,
        memo: values.memo,
        quantity: `${Number(values.quantity)
            .toFixed(4)
            .toString()} ${token}`
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  memo: Yup.string(),
  name: Yup.string()
    .required('Quantity is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const BuyRamForm = props => {
  return (
      <ToolBody color="warning" icon={Send} header="Transfer" subheader="- Transfer as much as possible to win!">
        <p>There is a 15% fee on all transfers. Become Chief Miner to get 10% fees.</p>
        <FormObject {...props} />
      </ToolBody>
  );
};

const enhance = compose(
  withStateHandlers(
    {
      token: 'BTC',
    },
    {
      handleToken: (token) => (token) => ({
        token: token,
      }),
    }
  ),
  mapProps(({ token, handleToken, ...otherProps }) => ({
    unit: {
      token,
      handleToken,
    },
    ...otherProps,
  })),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const {
        pushTransaction,
        networkIdentity,
        unit: { token },
      } = props;
      setSubmitting(false);
      const transaction = makeTransaction(values, token, networkIdentity);
      setSubmitting(false);
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      quantity: 1,
      token: props.unit.token,
      name: '',
      memo: '',
    }),
    validationSchema,
  })
);

export default enhance(BuyRamForm);
