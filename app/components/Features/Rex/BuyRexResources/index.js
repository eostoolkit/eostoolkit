/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 20.05.19
 * Version: 1.0
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
      name: 'unstaketorex',
      data: {
        owner: values.owner,
        receiver: values.receiver,
        from_net: `${Number(values.net)
          .toFixed(4)
          .toString()} ${values.activeNetwork.network.prefix}`,
        from_cpu: `${Number(values.cpu)
          .toFixed(4)
          .toString()} ${values.activeNetwork.network.prefix}`,
        transfer: values.transfer ? 1 : 0,
      },
    },
  ];
  return transaction;
};

const BuyFromResourcesForm = props => {
  const { intl } = props;
  return (
    <ToolBody
      color="warning"
      icon={Redo}
      header={intl.formatMessage(messages.rexBuyFormHeader)}
      subheader={intl.formatMessage(messages.rexBuyResourceFormHeaderSubheader)}>
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
      receiver: props.networkIdentity ? props.networkIdentity.name : '',
      net: '0',
      cpu: '0',
      activeNetwork: props.activeNetwork ? props.activeNetwork : '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formOwnerNameRequired)),
        name: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        net: Yup.number()
          .notRequired()
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
        cpu: Yup.number()
          .notRequired()
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
      });
    },
  })
);

export default enhance(BuyFromResourcesForm);
