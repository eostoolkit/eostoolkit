import React from 'react';

// core components
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const FormObject = props => {
  const { handleSubmit, intl } = props;
  const FormData = [
    {
      id: 'name',
      label: intl.formatMessage(messages.formPremiumNameLabel),
      placeholder: intl.formatMessage(messages.formPremiumNamePlaceholder),
    },
    {
      id: 'owner',
      label: intl.formatMessage(messages.formBidderNameLabel),
      placeholder: intl.formatMessage(messages.formBidderNamePlaceholder),
    },
    {
      id: 'bid',
      label: intl.formatMessage(messages.formBidInEOSLabel),
      placeholder: intl.formatMessage(messages.formBidInEOSPlaceholder),
    },
  ];
  const extraButton = () => {
    return (
      <a href="https://eospark.com/MainNet/bidaccount" target="new">
        <Button color="info">
          <FormattedMessage {...messages.formGetBidPrice} />
        </Button>
      </a>
    );
  };
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Submit Bid',
    extraButtons: extraButton,
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
      <GridItem xs={12} sm={12} md={6}>
        <p>
          <FormattedMessage {...messages.formBidPriceInfo} />
        </p>
      </GridItem>
    </ToolForm>
  );
};

export default FormObject;
