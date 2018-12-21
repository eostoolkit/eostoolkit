import React from 'react';
import ReactTable from 'react-table';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import CompareArrows from '@material-ui/icons/CompareArrows';
import History from '@material-ui/icons/History';
import Info from '@material-ui/icons/Info';
import PoorInfo from 'components/Information/PoorInfo';
import CircularProgress from '@material-ui/core/CircularProgress';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import FormObject from './FormObject';

const makeTransaction = (values, networkIdentity) => {
  const transaction = [
    {
      account: 'poormantoken',
      name: 'transfer',
      data: {
        from: networkIdentity ? networkIdentity.name : '',
        to: 'zks4poorswap',
        memo: 'Swap POOR for ZKS',
        quantity: `${Number(values.quantity)
          .toFixed(4)
          .toString()} POOR`,
      },
    },
  ];
  return transaction;
};

const validationSchema = Yup.object().shape({
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('You must send a positive quantity'),
});

const PoorSwap = props => {
  const { proxies, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;


  const claimTransaction = () => {
    if (!writerEnabled) {
      return { error: 'No scatter identity attached' };
    }

    const transaction = [
      {
        account: 'zks4poorswap',
        name: 'claim',
        data: {
          owner: networkIdentity ? networkIdentity.name : '',
        },
      },
    ];
    pushTransaction(transaction,props.history);
  };


  return (
    <Tool>

      <ToolSection md={12}>
        <ToolBody
          color="info"
          icon={Info}
          header="Information"
          >
          <PoorInfo/>
        </ToolBody>
      </ToolSection>
      <ToolSection md={12}>
        <ToolBody
          color="warning"
          icon={CompareArrows}
          header="POOR Swap"
          subheader=" - Exchange POOR for ZKS">
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection md={12}>

        <ToolBody
          color="warning"
          icon={History}
          header="POOR Swap Data"
          subheader=" - How much POOR is spent each day for ZKS">
          <Button onClick={() => claimTransaction()} color="rose">Claim ZKS</Button>
          <ReactTable
            data={proxies}
            filterable
            noDataText={<CircularProgress color="secondary" />}
            columns={[
              {
                Header: 'Day',
                accessor: 'cycle',
                width:200,
              },
              {
                Header: 'POOR',
                accessor: 'tokens',
                headerStyle: { 'text-align': 'left' },
                style: { 'text-align': 'left' }
              },
            ]}
            defaultPageSize={50}
            pageSize={proxies.length}
            showPaginationTop = {false}
            showPaginationBottom={false}
            className="-striped -highlight"
          />
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
      pushTransaction(transaction,props.history);
    },
    mapPropsToValues: () => ({
      quantity: '1',
    }),
    validationSchema,
  })
);

export default enhance(PoorSwap);
