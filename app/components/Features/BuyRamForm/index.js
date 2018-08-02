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

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

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

const validationSchema = ({ unit: { isEOS } }) => {
  const eosQuantity = Yup.number().positive('You must pay a positive quantity');
  const byteQuantity = Yup.number()
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional');

  return Yup.object().shape({
    owner: Yup.string().required('Payer name is required'),
    name: Yup.string().required('Account name is required'),
    byteQuantity: isEOS ? byteQuantity : byteQuantity.required('RAM purchase is required'),
    eosQuantity: !isEOS ? eosQuantity : eosQuantity.required('RAM purchase is required'),
  });
};

const BuyRamForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={AddCircle} header="Buy RAM">
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
      pushTransaction(transaction);
    },
    mapPropsToValues: props => ({
      byteQuantity: 8192,
      owner: props.networkIdentity ? props.networkIdentity.actor : '',
      eosQuantity: 1,
      isEOS: props.unit.isEOS,
      name: '',
    }),
    validationSchema,
  })
);

export default enhance(BuyRamForm);
