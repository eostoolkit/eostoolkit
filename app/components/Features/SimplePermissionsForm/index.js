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

const makeTransaction = values => {
  const transaction = [];
  if (values.activeKey === values.owner || values.ownerKey === values.owner) {
    return { error: 'This will break your account' };
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

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Owner name is required'),
  activeKey: Yup.string(),
  ownerKey: Yup.string(),
});

const SimplePermissionsForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={PersonAdd} header="Change Permissions" subheader=" Simple active / owner">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="danger" header="Important">
          <ChangePermissions />
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
      pushTransaction(transaction);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.actor : '',
      activeKey: '',
      ownerKey: '',
    }),
    validationSchema,
  })
);

export default enhance(SimplePermissionsForm);
