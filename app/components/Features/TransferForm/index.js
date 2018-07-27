/**
*
* TransferForm
*
*/

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Payment from '@material-ui/icons/Payment';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Sender name is required'),
  name: Yup.string().required('Account name is required'),
  symbol: Yup.string().required('Symbol is required'),
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const TransferForm = props => {
  const { handleSubmit, eosAccount, ...formikProps } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Payment} header="Transfer">
          <FormObject {...formikProps}/>
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
      const { handleSubmit } = props;
      setSubmitting(false);
      handleSubmit({ ...values});
    },
    mapPropsToValues: props => ({
      owner: props.eosAccount,
      name: '',
      symbol: 'EOS',
      quantity: '0',
      memo: '',
    }),
    validationSchema,
  })
);

export default enhance(TransferForm);
