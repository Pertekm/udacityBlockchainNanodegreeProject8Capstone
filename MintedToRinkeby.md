Command:
cd eth-contracts
truffle test .\test\TestSolnSquareVerifier.js --network rinkeby

Result:
https://rinkeby.etherscan.io/address/0x0b4c11be8762e9ca09007499126a7183090ad858

TokenId 0:
https://rinkeby.etherscan.io/tx/0xc9c8bc754d06d2562dfb575eb9c0fb0a8dc861b6aeaa6a88cd0ef5c856042c69

TokenId 0 on OpenSea:
https://rinkeby.opensea.io/assets/0xc96deb044f4fc4db45db121743f98270f2cd5c41/0

OpenSea marketplace / storefront:
https://rinkeby.opensea.io/assets/unidentified-contract-v593

ToDo:
- run zokrates 10 times to get 10 different proofs.
- for each proof place it in TestSolnSquareVerifier.js and run test
- 10 tokens should be visible in storefront

- Test and Verify OpenSea with your SolnSquareVerifier tokens:
-- List 5 of your tokens on the marketplace
-- Purchase those 5 tokens using a different address
- Complete required documentation and submit!