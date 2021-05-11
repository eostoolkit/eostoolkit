/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectWriter, makeSelectFlareDataTokens } from 'containers/NetworkClient/selectors';
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
  networkWriter: makeSelectWriter(),
  tokens: makeSelectFlareDataTokens(),
});

const enhance = compose(
  connect(mapStateToProps),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { networkIdentity, networkWriter, tokens } = props;

      const token = tokens.find(tk => tk.symbol === values.symbol);

      networkWriter.eosApi
        .transact(
          {
            actions: [
              {
                account: token.contract || 'eosio.token',
                name: 'transfer',
                authorization: [
                  {
                    actor: networkIdentity.name,
                    permission: networkIdentity.authority,
                  },
                ],
                data: {
                  from: values.owner,
                  to: values.name,
                  quantity: `${Number(values.quantity)
                    .toFixed(4)
                    .toString()} ${values.symbol}`,
                  memo: values.memo,
                },
              },
            ],
          },
          {
            broadcast: true,
            blocksBehind: 3,
            expireSeconds: 60,
          }
        )
        .then(result => {
          console.log('Transaction success!', result);
          return result;
        })
        .catch(error => {
          console.error('Transaction error :(', error);
          throw error;
        });

      setSubmitting(false);
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
