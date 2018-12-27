import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';
import ToolSwitch from 'components/Tool/ToolSwitch';

import messages from '../messages';
import commonMessages from '../../../messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const switchData = {
    id: 'transfer',
    label: intl.formatMessage(commonMessages.transferLabel),
    placeholder: intl.formatMessage(messages.transferPlaceholder),
    md: 12,
  };
  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(commonMessages.recipientLabel),
      placeholder: intl.formatMessage(commonMessages.recipientPlaceholder),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.stakeOwnerLabel),
      placeholder: intl.formatMessage(messages.stakeOwnerPlaceholder),
    },
    {
      id: 'cpu',
      label: intl.formatMessage(commonMessages.stakeCPULabel),
      placeholder: intl.formatMessage(messages.quantityCUPStake),
    },
    {
      id: 'net',
      label: intl.formatMessage(messages.quantityNetStakeLabel),
      placeholder: intl.formatMessage(messages.quantityNetStakePlaceholder),
    },
  ];
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    donateText: intl.formatMessage(messages.delegateSubmitText),
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <ToolSwitch {...switchData} {...props} />
    </ToolForm>
  );
};

export default FormObject;
