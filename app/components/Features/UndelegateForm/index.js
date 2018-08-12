import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

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

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Owner name is required'),
  name: Yup.string().required('Account name is required'),
  net: Yup.number()
    .required('NET Stake is required')
    .positive('You must unstake a positive quantity'),
  cpu: Yup.number()
    .required('CPU Stake is required')
    .positive('You must unstake a positive quantity'),
});

const DelegateForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Undo} header="Undelegate" subheader=" - Unstake">
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
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      net: '0',
      cpu: '0',
    }),
    validationSchema,
  })
);

export default enhance(DelegateForm);
