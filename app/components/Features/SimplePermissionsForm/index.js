/**
 *
 * SimplePermissionsForm
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

import ChangePermissions from 'components/Information/ChangePermissions';
import FormObject from './FormObject';

import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = (values, intl) => {
  const transaction = [];
  if (values.activeKey === values.owner || values.ownerKey === values.owner) {
    return { error: intl.formatMessage(messages.simplePermissionFormBreakAccountError) };
  }

  if (values.activeKey) {
    transaction.push({
      account: 'eosio',
      name: 'updateauth',
      data: {
        account: values.owner,
        permission: 'active',
        parent: 'owner',
        auth: values.activeKey,
      },
    });
  }

  if (values.ownerKey) {
    transaction.push({
      account: 'eosio',
      name: 'updateauth',
      data: {
        account: values.owner,
        permission: 'owner',
        parent: '',
        auth: values.ownerKey,
      },
    });
  }
  return transaction;
};

const SimplePermissionsForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={PersonAdd}
          header={intl.formatMessage(messages.simplePermissionFormHeader)}
          subheader={intl.formatMessage(messages.simplePermissionFormSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="danger" header={intl.formatMessage(messages.simplePermissionFormImportantHeader)}>
          <ChangePermissions />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, intl } = props;
      const transaction = makeTransaction(values, intl);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      activeKey: '',
      ownerKey: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formOwnerNameRequired)),
        activeKey: Yup.string(),
        ownerKey: Yup.string(),
      });
    },
  })
);

export default enhance(SimplePermissionsForm);
