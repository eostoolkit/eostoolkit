/**
 *
 * SetProxyForm
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// core components
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';
import messages from './messages';

const FormObject = props => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
  return (
    <form>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomInput
            labelText={<FormattedMessage {...messages.publicKey} />}
            id="publicKey"
            error={errors.publicKey}
            touched={touched.publicKey}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: <FormattedMessage {...messages.pubkeyText} />,
              value: values.publicKey,
              onChange: handleChange,
              onBlur: handleBlur,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button onClick={handleSubmit} color="rose">
            <FormattedMessage {...messages.searchButton} />
          </Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};
export default FormObject;
