const { ethers, run, network } = require('hardhat')

async function main() {
  const contractFactory = await ethers.getContractFactory('Eye')
  console.log('Contract Deploying, Please wait ...')
  const contract = await contractFactory.deploy(
    'Eye',
    'Ey',
    'ipfs://',
    'ipfs://'
  )
  await contract.deployed()
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log('Waiting for block confirmations...')
    await lottery.deployTransaction.wait(6)
    await verify(lottery.address, [])
  }
}

async function verify(contractAddress, arg) {
  console.log('Verifying contract...')
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already Verified!')
    } else {
      console.log(e)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
