import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import messages from '../messages';
import commonMessages from '../../../messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'undelegatebw',
      data: {
        from: values.owner,
        receiver: values.name,
        unstake_net_quantity: `${Number(values.net)
          .toFixed(4)
          .toString()} EOS`,
        unstake_cpu_quantity: `${Number(values.cpu)
          .toFixed(4)
          .toString()} EOS`,
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
      icon={Undo}
      header={intl.formatMessage(messages.undelegateFormHeader)}
      subheader={intl.formatMessage(messages.undelegateFormSubHeader)}>
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
          .positive(intl.formatMessage(messages.undelegateFormUnstakePositiveQuantity)),
        cpu: Yup.number()
          .required(intl.formatMessage(commonMessages.formCPUStakeRequired))
          .positive(intl.formatMessage(messages.undelegateFormUnstakePositiveQuantity)),
      });
    },
  })
);

export default enhance(DelegateForm);
