/*
 * BuyRamForm Messages
 *
 * This contains all the text for the BuyRamForm component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.BuyRamForm.header',
    defaultMessage: 'Buy Ram',
  },
  ownerName: {
    id: 'app.components.BuyRamForm.ownerName',
    defaultMessage: 'Payer',
  },
  ownerText: {
    id: 'app.components.BuyRamForm.ownerText',
    defaultMessage: 'Account paying for the Ram',
  },
  recepient: {
    id: 'app.common.recepient',
    defaultMessage: 'Recepient',
  },
  disclaimer: {
    id: 'app.common.disclaimer',
    defaultMessage:
      'By executing this action you are agreeing to the EOS constitution and this actions associated ricardian contract.',
  },
  purchase: {
    id: 'app.common.purchase',
    defaultMessage: 'Purchase',
  },
  recepientText: {
    id: 'app.common.ramRecepientText',
    defaultMessage: 'Account that receives the Ram',
  },
  bytes: {
    id: 'app.common.bytes',
    defaultMessage: 'bytes',
  },
  eos: {
    id: 'app.common.eos',
    defaultMessage: 'EOS',
  },
  ramBytes: {
    id: 'app.components.BuyRamForm.ramBytes',
    defaultMessage: 'Ram Quantity (in bytes)',
  },
  ramEos: {
    id: 'app.components.BuyRamForm.ramEos',
    defaultMessage: 'Ram Quantity (in EOS)',
  },
  ramText: {
    id: 'app.components.BuyRamForm.ramText',
    defaultMessage: 'How much to purchase',
  },
});
