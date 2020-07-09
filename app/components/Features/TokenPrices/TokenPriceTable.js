/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 09.07.2020
 * Version: 1.0
 */

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectTokenList } from "containers/NetworkClient/selectors";

import ReactTable from "react-table";
import CircularProgress from "@material-ui/core/CircularProgress";

import messages from "./messages";

const TokenPriceTable = props => {
  const { tokenList, intl } = props;
  if (tokenList !== undefined)
    return (
      <ReactTable
        data={tokenList}
        filterable
        noDataText={<CircularProgress color="secondary" />}
        columns={[
          {
            Header: intl.formatMessage(messages.tokenPriceTableColumnName),
            accessor: "id",
            id: "id",
            Cell: row => (
              <a
                href={`https://www.coingecko.com/en/coins/${row.value}`}
                target="new"
              >
                {row.value}
              </a>
            )
          },
          {
            Header: intl.formatMessage(
              messages.tokenPriceTableColumnCurrentPrice
            ),
            id: "current_price",
            accessor: d => Number(d.current_price).toFixed(2),
            Cell: row => <span>{row.value} USD</span>
          },
          {
            Header: intl.formatMessage(messages.tokenPriceTableColumnHigh24h),
            id: "high_24h",
            accessor: d => Number(d.high_24h).toFixed(2),
            Cell: row => <span>{row.value}</span>
          },
          {
            Header: intl.formatMessage(messages.tokenPriceTableColumnLow24h),
            id: "low_24h",
            accessor: d => Number(d.low_24h).toFixed(2),
            Cell: row => <span>{row.value}</span>
          },
          {
            Header: intl.formatMessage(
              messages.tokenPriceTableColumnPriceChange24h
            ),
            id: "price_chprice_change_24hange_24h",
            accessor: d => Number(d.price_change_24h).toFixed(2),
            Cell: row => (
              <span style={{ color: row.value >= 0 ? "green" : "red" }}>
                {row.value}
              </span>
            )
          },
          {
            Header: intl.formatMessage(
              messages.tokenPriceTableColumnCurrentMarketcap
            ),
            id: "market_cap",
            accessor: d => Number(d.market_cap).toFixed(2),
            Cell: row => <span>{row.value}</span>
          },
          {
            Header: intl.formatMessage(
              messages.tokenPriceTableColumnMarketcapChange24h
            ),
            id: "market_cap_change_24h",
            accessor: d => Number(d.market_cap_change_24h).toFixed(2),
            Cell: row => <span>{row.value}</span>
          },
          {
            filterable: false,
            sortable: false,
            maxWidth: 0
          }
        ]}
        defaultSorted={[
          {
            id: "position",
            desc: false
          }
        ]}
        // defaultPageSize={50}
        pageSize={tokenList.length}
        showPaginationTop={false}
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    );
  return null;
};

const mapStateToProps = createStructuredSelector({
  tokenList: makeSelectTokenList()
});

export default connect(mapStateToProps, null)(TokenPriceTable);
