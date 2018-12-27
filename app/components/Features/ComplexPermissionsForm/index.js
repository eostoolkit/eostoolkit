/**
 *
 * SimplePermissionsForm
 *
 */

import React from 'react';
import { compose, withStateHandlers, mapProps } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import PersonAdd from '@material-ui/icons/PersonAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import ComplexPermissions from 'components/Information/ComplexPermissions';
import FormObject from './FormObject';

import messages from './messages';
import commonMessages from '../../messages';

const makeTransaction = values => {
  try {
    const mixed = [];
    const keys = [];
    const accounts = [];
    const waits = [];

    Object.keys(values)
      .filter(v => v.startsWith('auth_value'))
      .map((auth, i) => {
        if (Number(values[`auth_weight_${i}`]) > 0) {
          mixed.push({
            value: values[auth],
            weight: Number(values[`auth_weight_${i}`]),
          });
        } else {
          throw 'Weights must be greater than 0';
        }
      });

    mixed.map(perm => {
      // is account?
      if (perm.value.includes('@') || (perm.value.length < 53 && isNaN(perm.value))) {
        if (perm.value.split('@')[1] === undefined && perm.value.length > 0)
          throw 'Accounts must have @permission appended i.e. account@active';
        accounts.push({
          permission: {
            actor: perm.value.split('@')[0],
            permission: perm.value.split('@')[1],
          },
          weight: perm.weight,
        });
        return;
      }
      if (isNaN(perm.value)) {
        // is public key
        keys.push({
          key: perm.value,
          weight: perm.weight,
        });
      } else {
        // is wait / delay
        waits.push({
          wait_sec: Number(perm.value),
          weight: perm.weight,
        });
      }
    });

    keys.sort((a, b) => a.key.localeCompare(b.key));
    accounts.sort((a, b) => a.permission.actor.localeCompare(b.permission.actor));
    waits.sort((a, b) => (a.wait_sec > b.wait_sec ? 1 : a.wait_sec < b.wait_sec ? -1 : 0));

    const authority = {
      threshold: Number(values.threshold),
      keys,
      accounts,
      waits,
    };

    const transaction = [];

    if (mixed.length === 1 && mixed[0].value === '') {
      transaction.push({
        account: 'eosio',
        name: 'deleteauth',
        data: {
          account: values.owner,
          permission: values.permission,
        },
      });
    } else {
      transaction.push({
        account: 'eosio',
        name: 'updateauth',
        data: {
          account: values.owner,
          permission: values.permission,
          parent: values.parent,
          auth: authority,
        },
      });
    }
    return transaction;
  } catch (err) {
    return { error: err };
  }
};

const ComplexPermissionsForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody
          color="danger"
          header={intl.formatMessage(commonMessages.formImportantHeader)}
          subheader={intl.formatMessage(messages.complexPermissionFormSubheader)}>
          <ComplexPermissions />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={12}>
        <ToolBody
          color="warning"
          icon={PersonAdd}
          header={intl.formatMessage(commonMessages.formChangePermissionHeader)}
          subheader={intl.formatMessage(messages.formChangePermissionSubheader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withStateHandlers(
    {
      inputs: 1,
    },
    {
      addInputs: ({ inputs }) => () => ({
        inputs: inputs + 1,
      }),
      subInputs: ({ inputs }) => () => ({
        inputs: inputs > 1 ? inputs - 1 : inputs,
      }),
    }
  ),
  mapProps(({ inputs, addInputs, subInputs, ...otherProps }) => ({
    inputManager: {
      inputs,
      addInputs,
      subInputs,
    },
    ...otherProps,
  })),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => {
      return {
        owner: props.networkIdentity ? props.networkIdentity.name : '',
        threshold: '1',
        permission: 'active',
        parent: 'owner',
        auth_value_0: '',
        auth_weight_0: '1',
      };
    },
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(commonMessages.formAccountNameRequired)),
        threshold: Yup.number().required(),//intl.formatMessage(commonMessages.formThresholdRequired)), //TODO: figure out why this one fails
        permission: Yup.string().required(intl.formatMessage(commonMessages.formPermissionRequired)),
        parent: Yup.string(),
      });
    },
  })
);

export default enhance(ComplexPermissionsForm);
