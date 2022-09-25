require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-ethers')
require('dotenv').config()

// setup variable
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const ALCHEMY_RPC_URL = process.env.ALCHEMY_RPC_URL || ''
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      url: ALCHEMY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  solidity: '0.8.0',
}
