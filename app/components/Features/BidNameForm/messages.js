import { defineMessages } from 'react-intl';

export default defineMessages({
  // Messages for BidNameForm
  bidForPremiumNameHeader: {
    id: 'app.components.Features.BidNameForm.bidForPremiumNameHeader',
    defaultMessage: 'Bid for Premium Name',
  },
  auctionDetailHeader: {
    id: 'app.components.Features.BidNameForm.auctionDetailHeader',
    defaultMessage: 'Auction Details',
  },
  bidNameFormText1: {
    id: 'app.components.Features.BidNameForm.bidNameFormText1',
    defaultMessage: 'Only one Premium Name is awarded per day.',
  },
  bidNameFormText2: {
    id: 'app.components.Features.BidNameForm.bidNameFormText2',
    defaultMessage: 'The name with the highest bid is the one awarded.',
  },
  bidNameFormText3: {
    id: 'app.components.Features.BidNameForm.bidNameFormText3',
    defaultMessage: 'Each bid must be 10% greater than the last bid.',
  },
  bidNameFormText4: {
    id: 'app.components.Features.BidNameForm.bidNameFormText4',
    defaultMessage: 'Your bid is only returned if you are out-bid.',
  },
  bidNameFormText5: {
    id: 'app.components.Features.BidNameForm.bidNameFormText5',
    defaultMessage: "Bidding for names consumes your account's RAM.",
  },
  formBidderNameRequired: {
    id: 'app.components.Features.BidNameForm.formBidderNameRequired',
    defaultMessage: 'Bidder name is required',
  },
  formPremiumNameRequired: {
    id: 'app.components.Features.BidNameForm.formPremiumNameRequired',
    defaultMessage: 'Premium name is required',
  },
  formBidQuantityRequired: {
    id: 'app.components.Features.BidNameForm.formBidQuantityRequired',
    defaultMessage: 'Bid quantity is required',
  },
  formBidQuantityPositiveRequired: {
    id: 'app.components.Features.BidNameForm.formBidQuantityPositiveRequired',
    defaultMessage: 'Bid must be a positive quantity',
  },

  formPremiumNameLabel: {
    id: 'app.components.Features.BidNameForm.formPremiumNameLabel',
    defaultMessage: 'Premium Name',
  },
  formPremiumNamePlaceholder: {
    id: 'app.components.Features.BidNameForm.formPremiumNamePlaceholder',
    defaultMessage: 'Name to bid for',
  },
  formBidderNameLabel: {
    id: 'app.components.Features.BidNameForm.formBidderNameLabel',
    defaultMessage: 'Bidder',
  },
  formBidderNamePlaceholder: {
    id: 'app.components.Features.BidNameForm.formBidderNamePlaceholder',
    defaultMessage: 'Account that bids for the name',
  },
  formBidInEOSLabel: {
    id: 'app.components.Features.BidNameForm.formBidInEOSLabel',
    defaultMessage: 'Bid (in EOS)',
  },
  formBidInEOSPlaceholder: {
    id: 'app.components.Features.BidNameForm.formBidInEOSPlaceholder',
    defaultMessage: 'Must be 10% greater than last bid',
  },
  formGetBidPrice: {
    id: 'app.components.Features.BidNameForm.formGetBidPrice',
    defaultMessage: 'Get Bid Prices',
  },
  formBidPriceInfo: {
    id: 'app.components.Features.BidNameForm.formBidPriceInfo',
    defaultMessage: 'The bid must be 10% greater than the previous bid.',
  },
});
