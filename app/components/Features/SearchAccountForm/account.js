/**
 *
 * SetProxyForm
 *
 */

import React from 'react';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

import { FormattedMessage, injectIntl } from 'react-intl';

import messages from './messages';
import commonMessages from '../../messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, intl } = props;
  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText={intl.formatMessage(commonMessages.formAccountNameText)}
            id="name"
            error={errors.name}
            touched={touched.name}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: intl.formatMessage(messages.accountFormSearchAccountPlaceholder),
              value: values.name,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button type="submit" color="rose">
            <FormattedMessage {...messages.searchButtonText} />
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
export default injectIntl(FormObject);
