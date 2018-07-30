import React from 'react';

// core components
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'name',
    label: 'Premium Name',
    placeholder: 'Name to bid for',
  },
  {
    id: 'owner',
    label: 'Bidder',
    placeholder: 'Account that bids for the name',
  },
  {
    id: 'bid',
    label: 'Bid (in EOS)',
    placeholder: 'Must be 10% greater than last bid',
  },
];

const extraButton = () => {
  return (
    <a href="https://eospark.com/MainNet/bidaccount" target="new">
      <Button color="info">Get Bid Prices</Button>
    </a>
  );
};

const FormObject = props => {
  const { handleSubmit } = props;
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
        <p>The bid must be 10% greater than the previous bid.</p>
      </GridItem>
    </ToolForm>
  );
};

export default FormObject;
