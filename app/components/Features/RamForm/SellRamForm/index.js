/**
 *
 * SellRamForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import RemoveCircle from '@material-ui/icons/RemoveCircle';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'sellram',
      data: {
        account: values.owner,
        bytes: Number(values.ram),
      },
    },
  ];
  return transaction;
};

const SellRamForm = props => {
  const { intl } = props;
  return (
    <ToolBody color="warning" icon={RemoveCircle} header={intl.formatMessage(messages.sellRamFormHeader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      ram: '8192',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(''),
        ram: Yup.number()
          .required(intl.formatMessage(messages.ramQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formRamPositiveQuantity))
          .integer(intl.formatMessage(commonMessages.formRamNotFractional)),
      });
    },
  })
);

export default enhance(SellRamForm);
