//
// Provide a list of EOS tokens that are available
//

const airgrabs = [
  // {
  //   symbol: 'XBL',
  //   account: 'billionairet',
  //   method: 'open',
  //   description: 'The Billionaire Token - the first super-deflationary, gaming and gambling token. The Airgrab will end on the 12th of March 2019! Everyone who had more than 100 EOS in their wallets on the 20th of January 2019 is eligible to Airgrab XBL. The ratio is 0.00122 to 1 - this means that for every 1000 EOS, you will receive 1.22 XBL.',
  //   url: 'https://BillionaireToken.com',
  // },
  // {
  //     symbol: 'ATD',
  //     account: 'eosatidiumio',
  //     method: 'signup',
  //     description: 'Payments & Budget Management Decentralized App Leveraging the Blockchain, Cryptocurrency and AI Technologies. Drops happen every 24 hours, Airgrab Today!',
  //     url: 'https://www.atidium.io/',
  // },
  // {
  //   symbol: 'NEB',
  //   account: 'nebulatokenn',
  //   method: 'open',
  //   description: 'Nebula is a decentralized, curated list of professionals and job opportunities.',
  //   url: 'https://nebulaprotocol.com',
  // },
  // {
  //   symbol: 'POOR',
  //   account: 'poormantoken',
  //   method: 'signup',
  //   description: 'A reward for people who STAKE and VOTE for EOS Block Producers with MONTHLY drops.',
  //   url: 'https://eostoolkit.io/airgrab',
  // },
  // {
  //   symbol: 'WIZZ',
  //   account: 'wizznetwork1',
  //   method: 'signup',
  //   description: 'Modern Decentralized Ecosystem, Built on EOSIO. Tools, Rewards, Chat, and more. AIGRAB NOW!',
  //   url: 'https://wizz.network',
  // },
];

const claimsUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-claims/master/claims.json';
const airgrabsUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airgrabs/master/airgrabs.json';
const tokensUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-airdrops/master/tokens.json';
const networksUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-networks/master/networks.json';
const refUrl = 'https://s3.amazonaws.com/api.eosvotes.io/eosvotes/tallies/latest.json';

export { refUrl, tokensUrl, networksUrl, claimsUrl, airgrabs };
