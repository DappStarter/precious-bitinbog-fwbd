require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remain essay inner enter obtain ten'; 
let testAccounts = [
"0xc3ea451ddf5f6648ac6649bc910f179e2c68d9bf7a9d4eeaf006be9ef135d665",
"0xb853bd6bafbd8fa674fa4e79d91971aa3b960f4f57809aa9d077ae3360d5b4b9",
"0x5e8b75238823baebc4fc74173ecb714d79298a5d21d1452d103c804811917724",
"0xf1525f25c4fb32c47f0438d1be4dce3fc0e7013f504b4dc8edcdeee700b8c07a",
"0x4f87a1bd0738d4035a0cc49a4ef9ad307a37e6854edf705606e51bb8a6264a6e",
"0x73d4f3e25e63e1b45a3a321ef76d69eac9dbe19fff930084c845c0bdc4c71df0",
"0xf36839c110cdfe82a977d496dd6f6afca62145f883cdbeb2dbd093ff44199843",
"0xc644d12ebf078454853a6a44f9ea5e494bdf757e08d9a4eaa87b90c468fdb67f",
"0x248eab6e92ab3b9aebc91ba3efd93e87fc21fc0331558d8340500bc0f5be1537",
"0xb0dce7006ec4ef9bf23f3fad92ac16c5a91dfe51391be58aadaa8f413fff0863"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


