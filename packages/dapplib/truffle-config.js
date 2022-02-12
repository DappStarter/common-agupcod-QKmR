require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue radar oven puppy gloom kite army gas'; 
let testAccounts = [
"0x7b1f7f3ae6029d9c1ae38af4639ddce5e0bb40fa8505e74be835208934897d6e",
"0x00c8d15ce2c4fc2057b3963c38cbe7fe0e4f9f091f9bedf014ceb8dd56711f53",
"0x32264706bacbd8f136b9d115659f4145d962bb200cd187710608315acbda8c5a",
"0x2010a288692ab5b17ed66e755289d7f1b96eab1bc229a7c0fc71e300e4018362",
"0x0e4b720df86f8540d79d7fae1f2a4938f69435005975ce0cdb54d629450adbbc",
"0xf9b0268e1024cddf68f5c580a84b2a8661ec35b6a8790c84bc419b7cf08a52f6",
"0x4ed81532c252205b8909dc800fada9ee91c358bc232153f2f041e53c2e61e491",
"0x345c73ae97b622211d2745944ef28e06fbb001eb71e6a82f56534d84e71ce556",
"0x3dc56d40fd5458226df440955a726deb5dc100ce081f6e470f334e605320f9af",
"0xc88a4f5b47220662eeaf6ae699c9803ef0972ed661cb73678db74304aa9f6cce"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

