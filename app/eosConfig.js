// Are we on the testnet?
const testnet = false;

//Configuration options for EOS and Scatter
const scatterConfig = {
    blockchain:'eos',
    host: testnet ? 'dev.cryptolions.io' : 'nodes.get-scatter.com', // ( or null if endorsed chainId )
    port: testnet ? '38888' : '443', // ( or null if defaulting to 80 )
    chainId: testnet ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
                     : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // Or null to fetch automatically ( takes longer )
}

const scatterEosOptions = {
    broadcast: true,
    sign: true,
    chainId: testnet ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
                     : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // Or null to fetch automatically ( takes longer )

}

const eosConfig = {
    httpEndpoint: testnet ? 'http://dev.cryptolions.io:38888' : 'https://nodes.get-scatter.com:443', // ( or null if endorsed chainId )
    broadcast: true,
    sign: true,
    chainId: testnet ? '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
                     : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', // Or null to fetch automatically ( takes longer )
}

export default eosConfig;
export {
  scatterConfig,
  scatterEosOptions,
  eosConfig,
  testnet,
}
