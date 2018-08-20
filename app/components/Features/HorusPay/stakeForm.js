/**
 *
 * HorusPay StakeForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Redo from '@material-ui/icons/Redo';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

const FormData = [
  {
    id: 'from',
    label: 'Account',
    placeholder: 'Account that provides the stake',
  },
  {
    id: 'receiver',
    label: 'Receiver',
    placeholder: 'Account that receives the stake',
  },
  {
    id: 'stake',
    label: 'Quantity',
    placeholder: 'Amount of HORUS to stake',
  },
];

const switchData = {
  id: 'transfer',
  label: 'Transfer',
  placeholder:
    'Transfer Off: Owner retains staking and reward control. Transfer On: Receiver receives staking and reward control.',
};

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Stake',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <ToolSwitch {...switchData} {...props} />
    </ToolForm>
  );
};

const makeTransaction = values => {
  const {stake, transfer, ...otherValues} = values;
  const transaction = [
    {
      account: 'horustokenio',
      name: 'stakehorus',
      data: {
        ...otherValues,
        stake_horus_quantity: `${Number(stake)
          .toFixed(4)
          .toString()} HORUS`,
        transfer: transfer ? 1 : 0,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  from: Yup.string().required('Account is required'),
  receiver: Yup.string().required('Receiver is required'),
  stake: Yup.number()
    .required('Stake is required')
    .positive('You must stake a positive quantity'),
});

const StakeForm = props => {
  return (
    <ToolBody color="warning" icon={Redo} header="Stake HorusPay" subheader=" - Earn rewards!">
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
      from: props.networkIdentity ? props.networkIdentity.name : '',
      receiver: '',
      stake: '',
      transfer: false,
    }),
    validationSchema,
  })
);

export default enhance(StakeForm);
