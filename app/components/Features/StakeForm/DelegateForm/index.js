/**
 *
 * DelegateForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Redo from '@material-ui/icons/Redo';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'delegatebw',
      data: {
        from: values.owner,
        receiver: values.name,
        stake_net_quantity: `${Number(values.net)
          .toFixed(4)
          .toString()} EOS`,
        stake_cpu_quantity: `${Number(values.cpu)
          .toFixed(4)
          .toString()} EOS`,
        transfer: values.transfer ? 1 : 0,
      },
    },
  ];
  return transaction;
};

const DelegateForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Redo}
      header={intl.formatMessage(messages.delegateFormHeader)}
      subheader={intl.formatMessage(messages.delegateFormSubHeader)}>
      <FormObject {...props} />
    </ToolBody>
  );
};

// const validationSchema = Yup.object().shape({
//   owner: Yup.string().required('Owner name is required'),
//   name: Yup.string().required('Account name is required'),
//   net: Yup.number()
//     .required('NET Stake is required')
//     .positive('You must stake a positive quantity'),
//   cpu: Yup.number()
//     .required('CPU Stake is required')
//     .positive('You must stake a positive quantity'),
// });

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
      name: '',
      net: '0',
      cpu: '0',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formOwnerNameRequired)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        net: Yup.number()
          .required(intl.formatMessage(commonMessages.formNETStakeRequired))
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
        cpu: Yup.number()
          .required(intl.formatMessage(commonMessages.formCPUStakeRequired))
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
      });
    },
  })
);

export default enhance(DelegateForm);
