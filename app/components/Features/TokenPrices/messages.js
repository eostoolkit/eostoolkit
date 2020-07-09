/*
 * Author: Andre Litty
 * Project: eostoolkit
 * Date: 09.07.2020
 * Version: 1.0
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for TokenPrices
  toolBodyHeader: {
    id: 'app.components.Features.TokenPrices.toolBodyHeader',
    defaultMessage: 'Token Prices',
  },
  toolBodySubHeader: {
    id: 'app.components.Features.TokenPrices.toolBodySubHeader',
    defaultMessage: ' - powered by coingecko.com',
  },
  tokenPriceInfoText: {
    id: 'app.components.Features.TokenPrices.tokenPriceInfoText',
    defaultMessage: `Token staked in Rex are not calculated at the moment. We're
              currently working on this feature, sorry for any inconvenience.`,
  },
  tokenPriceTableColumnName: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnName',
    defaultMessage: 'Name',
  },
  tokenPriceTableColumnCurrentPrice: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnCurrentPrice',
    defaultMessage: 'Current Price',
  },
  tokenPriceTableColumnHigh24h: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnHigh24h',
    defaultMessage: 'High 24h',
  },
  tokenPriceTableColumnLow24h: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnLow24h',
    defaultMessage: 'Low 24h',
  },
  tokenPriceTableColumnPriceChange24h: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnPriceChange24h',
    defaultMessage: 'Price change 24h',
  },
  tokenPriceTableColumnCurrentMarketcap: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnCurrentMarketcap',
    defaultMessage: 'Current Marketcap',
  },
  tokenPriceTableColumnMarketcapChange24h: {
    id: 'app.components.Features.TokenPrices.tokenPriceTableColumnMarketcapChange24h',
    defaultMessage: 'Marketcap change 24h',
  },
});
