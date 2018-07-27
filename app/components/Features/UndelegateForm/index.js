
import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Undo from '@material-ui/icons/Undo';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

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
  const { handleSubmit, eosAccount, ...formikProps } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Undo} header="Undelegate" subheader=" - Unstake">
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
      net: '0',
      cpu: '0',
    }),
    validationSchema,
  })
);

export default enhance(DelegateForm);
