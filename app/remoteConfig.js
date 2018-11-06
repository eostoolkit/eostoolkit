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
    symbol: 'INF',
    account: 'infinicoinio',
    method: 'open',
    description: 'Infiniverse is a decentralized augmented reality platform and virtual world on top of the real world. Infinicoin lets you register land and transact on the Infiniverse marketplace.',
    url: 'https://www.infiniverse.net/',
  },
  {
    symbol: 'NEB',
    account: 'nebulatokenn',
    method: 'open',
    description: 'Nebula is a decentralized, curated list of professionals and job opportunities.',
    url: 'https://nebulaprotocol.com',
  },
  {
    symbol: 'POOR',
    account: 'poormantoken',
    method: 'signup',
    description: 'A reward for people who STAKE and VOTE for EOS Block Producers with MONTHLY drops.',
    url: 'https://eostoolkit.io/airgrab',
  },
  {
    symbol: 'SEED',
    account: 'parslseed123',
    method: 'signup',
    description: 'Parsl is a supply chain technology company. People within the cannabis industry, who pay subscription fees to use the Parsl platform need to do so using SEED tokens. SEED token holders are entitled to rewards under the terms that are specified in documents on the Parsl website.',
    url: 'https://www.parsl.co',
  },
  {
    symbol: 'TRYBE',
    account: 'trybenetwork',
    method: 'claim',
    description: 'A tokenized knowledge and content sharing platform. Airgrab now for 50 TRYBE tokens (dropped 11th December). Sign up to the platform for a bonus 100 tokens.',
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

const claimsUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-claims/master/claims.json';
const airgrabsUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airgrabs/master/airgrabs.json';
const tokensUrl = 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json';
const networksUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-networks/master/networks.json';

export { tokensUrl, networksUrl, claimsUrl, airgrabs };
