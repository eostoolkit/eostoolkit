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

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import Donate from 'components/Information/Donate';

import FormObject from './FormObject';

import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = (values, networkIdentity) => {
  const transaction = [
    {
      account: 'eosio.token',
      name: 'transfer',
      data: {
        from: networkIdentity ? networkIdentity.name : '',
        to: 'aus1genereos',
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(4)
          .toString()} EOS`,
      },
    },
  ];
  return transaction;
};

const DonateForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody color="warning"
                  icon={CardGiftcard}
                  header={intl.formatMessage(messages.donateText)} >
          <Donate />
          <FormObject submitColor="success" submitText="Donate"  {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, networkIdentity } = props;
      const transaction = makeTransaction(values, networkIdentity);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props =>({
      quantity: '1',
      memo: 'Donation - Australian Bushfire Relief',
      activeNetwork:props.activeNetwork?props.activeNetwork: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        memo: Yup.string(),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(DonateForm);
