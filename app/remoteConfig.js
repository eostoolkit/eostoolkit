//
// Provide a list of EOS tokens that are available
//

const airgrabs = [
  {
   symbol: 'SOV',
   account: 'sovmintofeos',
   method: 'airgrab2',
   description: 'SOV - the first self-deflationary token on EOS the first variable rate self-deflationary cryptocurrency.',
   url: 'https://www.soveos.one',
   },
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
const lightAPI = 'https://endpoints.light.xeos.me/endpoints.json';
const refUrl = 'https://s3.amazonaws.com/api.eosvotes.io/eosvotes/tallies/latest.json';

export { refUrl, tokensUrl, networksUrl, claimsUrl, airgrabs, lightAPI };
