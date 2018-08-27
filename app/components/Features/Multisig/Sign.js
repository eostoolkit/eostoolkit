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

import Create from '@material-ui/icons/Create';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import Button from 'components/CustomButtons/Button';
import ReactFileReader from 'react-file-reader';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { signTransaction } from 'containers/OfflineClient/actions';

const FormData = [
  {
    id: 'transaction',
    label: 'Paste Transaction JSON below',
    placeholder: 'Paste Transaction JSON Here',
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
    submitText: 'Sign Transaction',
  };

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      console.log(reader.result);
      props.setValues({
        transaction: reader.result,
      });
    }
    reader.readAsText(files[0]);
    console.log(files);
  }

  return (
    <ToolForm {...formProps}>
      <ToolSection md={12}>
        <ReactFileReader handleFiles={handleFiles} fileTypes='.json,.txt'>
          <Button>Load Transaction JSON</Button>
        </ReactFileReader>
      </ToolSection>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const validationSchema = Yup.object().shape({
  transaction: Yup.string().required('Transaction is required'),
});

const MultisigSign = props => {
  const { transaction } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={Create}
          header="Sign Transaction"
          subheader=" - Supply the resulting JSON to the transaction sender">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Tutorial">
          <h5>Scatter Desktop is required. Not the Chrome Extension.</h5>
          <p>Load the Transaction JSON you were provided.</p>
          <p>Ensure Scatter is connected with the correct account to sign this transaction.</p>
          <p>Click Sign Transaction</p>
          <p>Scatter will appear asking you to sign an arbitrary Buffer. This will appear like random numbers. This is acceptable, and matches the JSON you loaded.</p>
          <p>A dialogue will appear with your Signature, and you will also automatically download a JSON file with this signature.</p>
          <p>Provide this signature or signature file to the person sending the transaction.</p>
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
    handleTransaction: (data) => dispatch(signTransaction(data)),
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
    }),
    validationSchema,
  })
);

export default enhance(MultisigSign);
