/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectFlareDataTokens } from 'containers/NetworkClient/selectors';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Payment from '@material-ui/icons/Payment';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';
import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = (values, tokens) => {
  const token = tokens.find(tk => tk.currency === values.symbol);

  const transaction = [
    {
      account: token.contract || 'eosio.token',
      name: 'transfer',
      data: {
        from: values.owner,
        to: values.name,
        quantity: `${Number(values.quantity).toString()} ${values.symbol}`,
        memo: values.memo,
      },
    },
  ];
  return transaction;
};

const TransferForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody color="warning" icon={Payment} header={intl.formatMessage(commonMessages.transferLabel)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  tokens: makeSelectFlareDataTokens(),
});

const enhance = compose(
  connect(mapStateToProps),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, tokens } = props;
      const transaction = makeTransaction(values, tokens);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      symbol: 'EOS',
      quantity: '0',
      memo: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(messages.senderValidation)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        symbol: Yup.string().required(intl.formatMessage(messages.symbolValidation)),
        memo: Yup.string(),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(TransferForm);
