/**
 *
 * BuyRamForm
 *
 */

import React from 'react';
import { compose, withStateHandlers, mapProps } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import AddCircle from '@material-ui/icons/AddCircle';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransaction = (values, isEOS) => {
  const type = isEOS
    ? {
      quant: `${Number(values.eosQuantity)
          .toFixed(4)
          .toString()} EOS`,
    }
    : { bytes: Number(values.byteQuantity) };

  const transaction = [
    {
      account: 'eosio',
      name: isEOS ? 'buyram' : 'buyrambytes',
      data: {
        payer: values.owner,
        receiver: values.name,
        ...type,
      },
    },
  ];
  return transaction;
};

const BuyRamForm = props => {
  const { intl } = props;
  return (
    <ToolBody color="warning" icon={AddCircle} header={intl.formatMessage(messages.buyRamHeader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withStateHandlers(
    {
      isEOS: true,
    },
    {
      handleByteUnitChange: () => () => ({
        isEOS: false,
      }),
      handleEOSUnitChange: () => () => ({
        isEOS: true,
      }),
    }
  ),
  mapProps(({ isEOS, handleByteUnitChange, handleEOSUnitChange, ...otherProps }) => ({
    unit: {
      isEOS,
      handleByteUnitChange,
      handleEOSUnitChange,
    },
    ...otherProps,
  })),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const {
        pushTransaction,
        unit: { isEOS },
      } = props;
      setSubmitting(false);
      const transaction = makeTransaction(values, isEOS);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      byteQuantity: 8192,
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      eosQuantity: 1,
      isEOS: props.unit.isEOS,
      name: '',
    }),
    validationSchema: props => {
      const { intl, isEOS } = props;
      const eosQuantity = Yup.number().positive(intl.formatMessage(messages.buyRamFormPositiveQuantity));
      const byteQuantity = Yup.number()
        .positive(intl.formatMessage(commonMessages.formRamPositiveQuantity))
        .integer(intl.formatMessage(commonMessages.formRamNotFractional));

      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(messages.buyRamFormPayerNameRequired)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        byteQuantity: isEOS
          ? byteQuantity
          : byteQuantity.required(intl.formatMessage(commonMessages.formRAMPurchaseRequired)),
        eosQuantity: !isEOS
          ? eosQuantity
          : eosQuantity.required(intl.formatMessage(commonMessages.formRAMPurchaseRequired)),
      });
    },
  })
);

export default enhance(BuyRamForm);
