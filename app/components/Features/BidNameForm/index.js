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
          .toString()} EOS`,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  owner: Yup.string().required('Bidder name is required'),
  name: Yup.string().required('Premium name is required'),
  bid: Yup.number()
    .required('Bid quantity is required')
    .positive('Bid must be a positive quantity'),
});

const BidNameForm = props => {
  return (
    <Tool>
      <ToolSection lg={8}>
        <ToolBody color="warning" icon={Gavel} header="Bid for Premium Name">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection lg={4}>
        <ToolBody color="info" header="Auction Details">
          <p>Only one Premium Name is awarded per day.</p>
          <p>The name with the highest bid is the one awarded.</p>
          <p>Each bid must be 10% greater than the last bid.</p>
          <p>Your bid is only returned if you are out-bid.</p>
          <p>Bidding for names consumes your account&apos;s RAM.</p>
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
      pushTransaction(transaction);
    },
    mapPropsToValues: props => ({
      owner: props.eosAccount,
      name: '',
      bid: 0,
    }),
    validationSchema,
  })
);

export default enhance(BidNameForm);
