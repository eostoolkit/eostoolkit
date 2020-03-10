/**
 *
 * TransferForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

// @material-ui/icons
import CardGiftcard from '@material-ui/icons/CardGiftcard';

import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridItem from "components/Grid/GridItem";

import Donate from 'components/Information/Donate';

import FormObject from './FormObject';

import messages from './messages';
import commonMessages from '../../messages';
import genpoolWeb from '../../../assets/img/genpool.png';

const bannerBackground = {
  margin: '15px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14);',
  width: '100%;',
  display: 'flex;',
  borderRadius: 6,
  height: '100%',
  width: '100%',
};

const bannerImage = {
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxHeight: '500px',
  position: 'relative',
  borderRadius: 6,
};

const makeTransaction = (values, networkIdentity) => {
  const transaction = [
    {
      account: 'eosio.token',
      name: 'transfer',
      data: {
        from: networkIdentity ? networkIdentity.name : '',
        to: 'aus1genereos',
        memo: values.memo,
        quantity: `${Number(values.quantity)
          .toFixed(4)
          .toString()} EOS`,
      },
    },
  ];
  return transaction;
};

const DonateForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <a target="_blank" href="https://genpool.io/">
          <div style={bannerBackground}>
            <img style={bannerImage} src={genpoolWeb} alt="eosbot-banner" />
          </div>
        </a>
      </GridItem>
      <ToolSection lg={12}>
        <ToolBody color="warning"
                  icon={CardGiftcard}
                  header={intl.formatMessage(messages.donateText)}
                  style={{backgroundImage:
                   'linear-gradient(10deg, #ff0000 0%, #ffed00 74%)' }}>
          <Donate />
          <FormObject submitColor="success" submitText="Donate"  {...props} />
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction, networkIdentity } = props;
      const transaction = makeTransaction(values, networkIdentity);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props =>({
      quantity: '1',
      memo: 'Donation - Australian Bushfire Relief',
      activeNetwork:props.activeNetwork?props.activeNetwork: '',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        memo: Yup.string(),
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(DonateForm);
