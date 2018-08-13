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

const makeTransaction = values => {

  try {
    let mixed = [];
    let keys = [];
    let accounts = [];
    let waits = [];

    Object.keys(values).filter(v => v.startsWith('auth_value')).map((auth, i) => {
      if(Number(values[`auth_weight_${i}`]) > 0) {
        mixed.push({
          value: values[auth],
          weight: Number(values[`auth_weight_${i}`])
        })
      } else {
        throw("Weights must be greater than 0");
      }
    });

    mixed.map(perm => {
      //is account?
      if(perm.value.includes('@') || perm.value.length < 54) {
        if(perm.value.split('@')[1] === undefined && perm.value.length > 0) throw("Accounts must have @permission appended i.e. account@active")
        accounts.push({
          permission: {
            actor: perm.value.split('@')[0],
            permission: perm.value.split('@')[1],
          },
          weight: perm.weight
        })
        return;
      }
      if(isNaN(perm.value)) {
        //is public key
        keys.push({
          key: perm.value,
          weight: perm.weight,
        })
      } else {
        //is wait / delay
        waits.push({
          "wait_sec": Number(perm.value),
          weight: perm.weight,
        })
      }
      return;
    });

    keys.sort((a, b) => a.key.localeCompare(b.key));
    accounts.sort((a, b) => a.permission.actor.localeCompare(b.permission.actor));
    waits.sort((a, b) => a.wait_sec > b.wait_sec ? 1 : a.wait_sec < b.wait_sec ? -1 : 0);

    const authority = {
      threshold: Number(values.threshold),
      keys,
      accounts,
      waits,
    }

    const transaction = [];

    if(mixed.length === 1 && mixed[0].value === '') {
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
  } catch(err) {
    return({error: err});
  }
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Account name is required'),
  threshold: Yup.number().required('Threshold is required'),
  permission: Yup.string().required('Permission is required'),
  parent: Yup.string(),
});

const ComplexPermissionsForm = props => {
  return (
    <Tool>
      <ToolSection lg={12}>
        <ToolBody color="danger" header="Important" subheader=" - Advanced EOS Users only">
          <ComplexPermissions />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={12}>
        <ToolBody color="warning" icon={PersonAdd} header="Change Permissions" subheader=" - Advanced permission structures">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withStateHandlers(
    {
      inputs: 1
    },
    {
      addInputs: ({inputs}) => () => ({
        inputs: inputs + 1,
      }),
      subInputs: ({inputs}) => () => ({
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
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: props => {
      return {
        owner: props.networkIdentity ? props.networkIdentity.name : '',
        threshold: '1',
        permission: 'active',
        parent: 'owner',
        auth_value_0: '',
        auth_weight_0: '1',
      }
    },
    validationSchema,
  })
);

export default enhance(ComplexPermissionsForm);
