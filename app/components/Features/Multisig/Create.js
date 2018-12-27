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

import NoteAdd from '@material-ui/icons/NoteAdd';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import { makeSelectTransaction } from 'containers/NetworkClient/selectors';
import { stageTransaction } from 'containers/OfflineClient/actions';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'transaction',
      label: intl.formatMessage(messages.multisigCreateFormTransactionDetailsText),
      placeholder: intl.formatMessage(messages.multisigCreateFormTransactionPlaceholder),
      multiline: true,
      rows: 30,
      md: 12,
    },
    {
      id: 'actor',
      label: intl.formatMessage(messages.multisigCreateFormAuthorizationLabel),
      placeholder: intl.formatMessage(messages.multisigCreateFormTransactionPlaceholder),
    },
    {
      id: 'permission',
      label: intl.formatMessage(commonMessages.formAccountPermissionLabel),
      placeholder: intl.formatMessage(messages.multisigCreateFormPermissionPlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: intl.formatMessage(messages.multisigCreateFormSubmitText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

const MultisigCreate = props => {
  const { transaction, intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody
          color="warning"
          icon={NoteAdd}
          header={intl.formatMessage(messages.multisigCreateFormHeader)}
          subheader={intl.formatMessage(messages.multisigCreateFormSubHeader)}>
          <h5>
            <FormattedMessage {...messages.multisigCreateFormTransactionDetailsText} />:
          </h5>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(commonMessages.tutorialHeaderMessage)}>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine1} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine2} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine3} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine4} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine5} />
          </p>
          <p>
            <FormattedMessage {...messages.multisigCreateFormTutorialLine6} />
          </p>
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
    handleTransaction: data => dispatch(stageTransaction(data)),
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
      actor: '',
      permission: '',
      transaction: props.transaction
        ? JSON.stringify(props.transaction, null, 2)
        : props.intl.formatMessage(messages.multisigCreateFormNoTransactionAvailable),
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        actor: Yup.string().required(intl.formatMessage(commonMessages.formAccountRequired)),
        permission: Yup.string().required(intl.formatMessage(commonMessages.formPermissionRequired)),
      });
    },
  })
);

export default enhance(MultisigCreate);
