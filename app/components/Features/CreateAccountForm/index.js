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

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import commonMessages from '../../messages';

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

const CreateAccountForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={PersonAdd} header={intl.formatMessage(messages.formHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <p>
            <FormattedMessage {...commonMessages.tutorialHeaderMessage} />
          </p>
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
      pushTransaction(transaction, props.history);
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
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(messages.formAccountNameCreatorMessage)),
        name: Yup.string()
          .required(intl.formatMessage(commonMessages.formAccountNameRequired))
          .matches(/([a-z1-5]){12,}/, {
            excludeEmptyString: true,
            message: intl.formatMessage(messages.formAccountNameInvalid),
          }),
        ownerKey: Yup.string().required(intl.formatMessage(messages.formOwnerKeyMessage)),
        activeKey: Yup.string().required(intl.formatMessage(messages.formActiveKeyRequired)),
        net: Yup.number()
          .required(intl.formatMessage(commonMessages.formNETStakeRequired))
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
        cpu: Yup.number()
          .required(intl.formatMessage(commonMessages.formCPUStakeRequired))
          .positive(intl.formatMessage(commonMessages.formStakePositiveQuantity)),
        ram: Yup.number()
          .required(intl.formatMessage(commonMessages.formRAMPurchaseRequired))
          .positive(intl.formatMessage(commonMessages.formRamPositiveQuantity))
          .integer(intl.formatMessage(commonMessages.formRamNotFractional)),
      });
    },
  })
);

export default injectIntl(enhance(CreateAccountForm));
