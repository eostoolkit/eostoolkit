import React from 'react';
import ReactTable from 'react-table';
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
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

import messages from './messages';
import commonMessages from '../../messages';

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

const PoorSwap = props => {
  const { proxies, intl, ...clientProps } = props;
  const { networkAccount, networkIdentity, writerEnabled, pushTransaction } = clientProps;

  const claimTransaction = () => {
    if (!writerEnabled) {
      return { error: intl.formatMessage(commonMessages.errorNoScatterIdentity) };
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
    pushTransaction(transaction, props.history);
  };

  return (
    <Tool>
      <ToolSection md={12}>
        <ToolBody color="info" icon={Info} header={intl.formatMessage(commonMessages.informationHeaderMessage)}>
          <PoorInfo />
        </ToolBody>
      </ToolSection>
      <ToolSection md={12}>
        <ToolBody
          color="warning"
          icon={CompareArrows}
          header={intl.formatMessage(messages.poorInfoPoorSwapHeader)}
          subheader={intl.formatMessage(messages.poorInfoPoorSwapSubHeader)}>
          <FormObject {...props} />
        </ToolBody>
      </ToolSection>
      <ToolSection md={12}>
        <ToolBody
          color="warning"
          icon={History}
          header={intl.formatMessage(messages.poorInfoPoorSwapToolHeader)}
          subheader={intl.formatMessage(messages.poorInfoPoorSwapToolHeader)}>
          <Button onClick={() => claimTransaction()} color="rose">
            Claim ZKS
          </Button>
          <ReactTable
            data={proxies}
            filterable
            noDataText={<CircularProgress color="secondary" />}
            columns={[
              {
                Header: intl.formatMessage(messages.poorInfoPoorSwapTableColumnDay),
                accessor: 'cycle',
                width: 200,
              },
              {
                Header: intl.formatMessage(messages.poorInfoPoorSwapTableColumnPOOR),
                accessor: 'tokens',
                headerStyle: { 'text-align': 'left' },
                style: { 'text-align': 'left' },
              },
            ]}
            defaultPageSize={50}
            pageSize={proxies.length}
            showPaginationTop={false}
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
      pushTransaction(transaction, props.history);
    },
    mapPropsToValues: () => ({
      quantity: '1',
    }),
    validationSchema: props => {
      const { intl } = props;
      return Yup.object().shape({
        quantity: Yup.number()
          .required(intl.formatMessage(commonMessages.formQuantityRequired))
          .positive(intl.formatMessage(commonMessages.formPositiveQuantityRequired)),
      });
    },
  })
);

export default enhance(PoorSwap);
