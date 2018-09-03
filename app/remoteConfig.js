//
// Provide a list of EOS tokens that are available
//

const airgrabs = [
  {
    symbol: 'ATD',
    account: 'eosatidiumio',
    method: 'signup',
    description: 'Payments & Budget Management Decentralized App Leveraging the Blockchain, Cryptocurrency and AI Technologies. Drops happen every 24 hours, Airgrab Today!',
    url: 'https://www.atidium.io/',
  },
  {
    symbol: 'POOR',
    account: 'poormantoken',
    method: 'signup',
    description: 'A reward for people who STAKE and VOTE for EOS Block Producers with MONTHLY drops.',
    url: 'https://eostoolkit.io/airgrab',
  },
  {
    symbol: 'TRYBE',
    account: 'trybenetwork',
    method: 'claim',
    description: 'A tokenized knowledge and content sharing platform. Airgrab now for 50 TRYBE tokens (dropped 11th September). Sign up to the platform for a bonus 100 tokens.',
    url: 'https://trybe.one',
  },
  {
    symbol: 'WIZZ',
    account: 'wizznetwork1',
    method: 'signup',
    description: 'Modern Decentralized Ecosystem, Built on EOSIO. Tools, Rewards, Chat, and more. AIGRAB NOW!',
    url: 'https://wizz.network',
  },
];

const tokensUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json';
const networksUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-networks/master/networks.json';

export { tokensUrl, networksUrl, airgrabs };
