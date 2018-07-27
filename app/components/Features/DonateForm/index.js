/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

// @material-ui/icons
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import Favorite from '@material-ui/icons/Favorite';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import Donate from 'components/Information/Donate';
import BlockOneLetter from 'components/Information/BlockOneLetter';

import FormObject from './FormObject';


const validationSchema = Yup.object().shape({
  memo: Yup.string(),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const DonateForm = props => {
  const { handleSubmit, ...formikProps } = props;
  return (
    <Tool>
      <ToolSection lg={6}>
        <ToolBody color="warning" icon={CardGiftcard} header="Donate">
          <Donate />
          <FormObject {...formikProps}/>
        </ToolBody>
      </ToolSection>
      <ToolSection lg={6}>
        <ToolBody color="rose" icon={Favorite} header="Help support us">
          <BlockOneLetter/>
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
      quantity: '1',
      memo: '',
    }),
    validationSchema,
  })
);

export default enhance(DonateForm);
