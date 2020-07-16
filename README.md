ToDo of Review:
OpenSea Marketplace
Deployment
Project Deliverables

# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# ZoKrates
Version 0.4.6 for solidity version 0.5, instead of latest for 0.6. because current truffle (version 5.1) does only support 0.5. Under windows use powershell instead of cmd.
`docker run -v ${PWD}:/home/zokrates/code -ti zokrates/zokrates:0.4.6 /bin/bash`

`cd code/zokrates/code/square`

`~/zokrates compile -i square.code`

`~/zokrates setup`

`~/zokrates compute-witness -a 3 9`

`~/zokrates generate-proof`

`~/zokrates export-verifier`

Copy generated verifier.sol to ./eth-contracts\contracts\SquareVerifier.sol

# Truffle
## Compile
`truffle compile`

## Test
`npm test`

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
