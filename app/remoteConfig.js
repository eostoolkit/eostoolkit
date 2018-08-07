//
// Provide a list of EOS tokens that are available
//

const airgrabs = [
  {
    symbol: 'POOR',
    account: 'poormantoken',
    method: 'signup',
    description: 'A public test of the airgrab and alternative airdrop methods.',
    url: 'https://eostoolkit.io/airgrab',
  },
  {
    symbol: 'RIDL',
    account: 'ridlridlcoin',
    method: 'claim',
    description: 'Support Scatter and trustless reputation on blockchain.',
    url: 'https://ridl.get-scatter.com',
  },
  {
    symbol: 'TRYBE',
    account: 'trybenetwork',
    method: 'claim',
    description: 'Decentralized Intelligence. A tokenized knowledge and content sharing platform. A Trusted Information System.',
    url: 'https://trybe.one',
  },
  {
    symbol: 'WIZZ',
    account: 'wizznetwork1',
    method: 'signup',
    description: 'A crypto-asset wallet and purchasing tool.',
    url: 'https://wizz.network',
  },
];

const tokensUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-airdrops/master/tokens.json';
const networksUrl = 'https://raw.githubusercontent.com/eostoolkit/eos-networks/master/networks.json';

export { tokensUrl, networksUrl, airgrabs };
