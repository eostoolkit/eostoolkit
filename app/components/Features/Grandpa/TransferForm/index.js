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

import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import commonMessages from '../../../messages';

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
          .toString()} ${token}`,
      },
    },
  ];
  return transaction;
};

const BuyRamForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Send}
      header={intl.formatMessage(commonMessages.transferLabel)}
      subheader={intl.formatMessage(messages.grandpaTransferFormSubHeader)}>
      <p>
        <FormattedMessage {...messages.grandpaTransferFormFeeInformation} />
      </p>
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
      handleToken: token => token => ({
        token,
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
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      quantity: 1,
      token: props.unit.token,
      name: '',
      memo: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        memo: Yup.string(),
        name: Yup.string().required(intl.formatMessage(commonMessages.formQuantityRequired)),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(BuyRamForm);
