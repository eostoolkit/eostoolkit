/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import Send from '@material-ui/icons/Send';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import Button from 'components/CustomButtons/Button';
import ReactFileReader from 'react-file-reader';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { pushTransaction } from 'containers/OfflineClient/actions';

const FormData = [
  {
    id: 'signatures',
    label: 'Signature JSON',
    placeholder: 'Signatures',
    multiline: true,
    rows: 5,
    md: 12,
  },
  {
    id: 'transaction',
    label: 'Transaction JSON',
    placeholder: 'Transaction JSON',
    multiline: true,
    rows: 30,
    md: 12,
  }
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Push Transaction',
  };

  const handleFiles = files => {
    try {
      var reader = new FileReader();
      reader.onload = function(e) {
        const values = props.values;
        props.setValues({
          signatures: values.signatures,
          transaction: reader.result,
        });
      }
      reader.readAsText(files[0]);
    } catch(c) {
      //something went wrong
    }
  }

  const handleSigs = files => {
    try {
      const values = props.values;
      const curr = values.signatures ? values.signatures.replace(/[\n\r]/g,'').trim().split(',') : [];

      var reader = new FileReader();

      reader.onload = function(e) {
        curr.push(JSON.parse(reader.result));

        const signatures = curr.sort().join(',\n');

        props.setValues({
          signatures,
          transaction: values.transaction,
        });
      }

      reader.readAsText(files[0]);
    } catch(c) {
      //something went wrong
    }
  }

  return (
    <ToolForm {...formProps}>
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleSigs} fileTypes='.json,.txt'>
          <Button>Add Signature</Button>
        </ReactFileReader>
      </ToolSection>
      <ToolInput {...FormData[0]} {...props} />
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleFiles} fileTypes='.json,.txt'>
          <Button>Load Transaction JSON</Button>
        </ReactFileReader>
      </ToolSection>
      <ToolInput {...FormData[1]} {...props} />
    </ToolForm>
  );
};

const validationSchema = Yup.object().shape({
  transaction: Yup.string().required('Transaction is required'),
  signatures: Yup.string().required('Signatures is required'),
});

const MultisigPush = props => {
  const { transaction } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Send}
          header="Push Transaction"
          subheader=" - Push signed transaction to the Network">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <p>Enter each signature seperated by commas, or use Add Signature to load each signature file.</p>
          <p>Load the transaction JSON</p>
          <p>Click Push Transaction</p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const mapStateToProps = createStructuredSelector({
  transaction: makeSelectTransaction(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleTransaction: (data) => dispatch(pushTransaction(data)),
  };
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { handleTransaction } = props;
      setSubmitting(false);
      handleTransaction(values);
    },
    mapPropsToValues: props => ({
      transaction: '',
      signatures: '',
    }),
    validationSchema,
  })
);

export default enhance(MultisigPush);
