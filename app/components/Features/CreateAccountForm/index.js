/**
 *
 * CreateAccountForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import PersonAdd from '@material-ui/icons/PersonAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'newaccount',
      data: {
        creator: values.owner,
        name: values.name,
        owner: values.ownerKey,
        active: values.activeKey,
      },
    },
    {
      account: 'eosio',
      name: 'buyrambytes',
      data: {
        payer: values.owner,
        receiver: values.name,
        bytes: Number(values.ram),
      },
    },
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

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Creator name is required'),
  name: Yup.string()
    .required('Account name is required')
    .matches(/([a-z1-5]){12,}/, {
      excludeEmptyString: true,
      message: 'Invalid account name',
    }),
  ownerKey: Yup.string().required('Owner key is required'),
  activeKey: Yup.string().required('Active key is required'),
  net: Yup.number()
    .required('NET Stake is required')
    .positive('You must stake a positive quantity'),
  cpu: Yup.number()
    .required('CPU Stake is required')
    .positive('You must stake a positive quantity'),
  ram: Yup.number()
    .required('RAM purchase is required')
    .positive('RAM must be a positive quantity')
    .integer('RAM cannot be fractional'),
});

const CreateAccountForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={PersonAdd} header="Create Account">
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
      ownerKey: '',
      activeKey: '',
      net: '0.1',
      cpu: '0.1',
      ram: '8192',
    }),
    validationSchema,
  })
);

export default enhance(CreateAccountForm);
