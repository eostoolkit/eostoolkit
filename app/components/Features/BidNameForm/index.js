/**
 *
 * BidNameForm
 *
 */

import React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

// @material-ui/icons
import Gavel from '@material-ui/icons/Gavel';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';

import FormObject from './FormObject';

import { FormattedMessage } from 'react-intl';

import messages from './messages';

const makeTransaction = values => {
  const transaction = [
    {
      account: 'eosio',
      name: 'bidname',
      data: {
        bidder: values.owner,
        newname: values.name,
        bid: `${Number(values.bid)
          .toFixed(4)
          .toString()} ${values.activeNetwork.network.prefix}`,
      },
    },
  ];
  return transaction;
};

const BidNameForm = props => {
  const { intl } = props;
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Gavel} header={intl.formatMessage(messages.bidForPremiumNameHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header={intl.formatMessage(messages.auctionDetailHeader)}>
          <p>
            <FormattedMessage {...messages.bidNameFormText1} />
          </p>
          <p>
            <FormattedMessage {...messages.bidNameFormText2} />
          </p>
          <p>
            <FormattedMessage {...messages.bidNameFormText3} />
          </p>
          <p>
            <FormattedMessage {...messages.bidNameFormText4} />
          </p>
          <p>
            <FormattedMessage {...messages.bidNameFormText5} />
          </p>
        </ToolBody>
      </ToolSection>
    </Tool>
  );
};

const enhance = compose(
  withFormik({
    handleSubmit: (values, { props, setSubmitting }) => {
      const { pushTransaction } = props;
      const transaction = makeTransaction(values);
      setSubmitting(false);
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: props => ({
      owner: props.networkIdentity ? props.networkIdentity.name : '',
      name: '',
      bid: 0,
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        owner: Yup.string().required(intl.formatMessage(messages.formBidderNameRequired)),
        name: Yup.string().required(intl.formatMessage(messages.formPremiumNameRequired)),
        bid: Yup.number()
          .required(intl.formatMessage(messages.formBidQuantityRequired))
          .positive(intl.formatMessage(messages.formBidQuantityPositiveRequired)),
      });
    },
  })
);

export default enhance(BidNameForm);
