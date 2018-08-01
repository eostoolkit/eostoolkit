/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectTokens as selectTokens } from 'containers/Remote/selectors';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Payment from '@material-ui/icons/Payment';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const makeTransaction = (values, eosTokens) => {
  const token = eosTokens.find(tk => tk.symbol === values.symbol);
  const transaction = [
    {
      account: token.account,
      name: 'transfer',
      data: {
        from: values.owner,
        to: values.name,
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(token.precision)
          .toString()} ${values.symbol}`,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Sender name is required'),
  name: Yup.string().required('Account name is required'),
  symbol: Yup.string().required('Symbol is required'),
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const TransferForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Payment} header="Transfer">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <p>Tutorial coming soon</p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  eosTokens: selectTokens(),
});

const enhance = compose(
  connect(
    mapStateToProps,
    null
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, eosTokens } = props;
      const transaction = makeTransaction(values, eosTokens);
      setSubmitting(false);
      pushTransaction(transaction);
    },
    mapPropsToValues: props => ({
      owner: props.eosAccount,
      name: '',
      symbol: 'EOS',
      quantity: '0',
      memo: '',
    }),
    validationSchema,
  })
);

export default enhance(TransferForm);
