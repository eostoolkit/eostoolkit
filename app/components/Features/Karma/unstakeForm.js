/**
 *
 * Karma StakeForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

const FormData = [
  {
    id: 'owner',
    label: 'Account',
    placeholder: 'Account that provides the stake',
    lg:12
  },
  {
    id: 'quantity',
    label: 'Quantity',
    placeholder: 'Amount of KARMA to POWER UP',
    lg:12
  },
];


const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Power Down',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const makeTransaction = values => {
  const {quantity, owner} = values;
  const transaction = [
    {
      account: 'therealkarma',
      name: 'powerdown',
      data: {
        owner,
        quantity: `${Number(quantity)
          .toFixed(4)
          .toString()} KARMA`,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Account is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must provide a positive quantity'),
});

const StakeForm = props => {
  return (
    <ToolBody color="warning" icon={Undo} header="Power Down your KARMA" subheader=" - You don't want more KARMA?">
      <h6>Advance Preview: Works on JUNGLE only</h6>
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
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      quantity: '',
    }),
    validationSchema,
  })
);

export default enhance(StakeForm);
