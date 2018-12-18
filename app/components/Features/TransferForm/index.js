/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Payment from '@material-ui/icons/Payment';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';
import messages from './messages';

const makeTransaction = (values, networkAccount) => {
  const token = networkAccount.balances.find(tk => tk.symbol === values.symbol);
  const precision = token.amount.split(".")[1] ? token.amount.split(".")[1].length : 0;
  const transaction = [
    {
      account: token.code || 'eosio.token',
      name: 'transfer',
      data: {
        from: values.owner,
        to: values.name,
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(precision)
          .toString()} ${values.symbol}`,
      },
    },
  ];
  return transaction;
};

const TransferForm = props => {
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody color="warning" icon={Payment} header="Transfer">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

// const mapStateToProps = createStructuredSelector({
//   eosTokens: selectTokens(),
// });

const enhance = compose(
  // connect(
  //   mapStateToProps,
  //   null
  // ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, networkAccount } = props;
      const transaction = makeTransaction(values, networkAccount);
      setSubmitting(false);
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      symbol: 'EOS',
      quantity: '0',
      memo: '',
    }),
    validationSchema: props => {
      const {intl} = props;
      return Yup.object().shape({
        owner: Yup.string().required('Sender name is required'),
        name: Yup.string().required(intl.formatMessage(messages.nameValidation)),
        symbol: Yup.string().required('Symbol is required'),
        memo: Yup.string(),
        quantity: Yup.number()
          .required('Quantity is required')
          .positive('You must send a positive quantity'),
      });
    },
  })
);

export default enhance(TransferForm);
