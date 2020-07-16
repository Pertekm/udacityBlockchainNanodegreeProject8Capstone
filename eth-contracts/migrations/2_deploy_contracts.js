// migrating the appropriate contracts
var SquareVerifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

/*
module.exports = function(deployer) {
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "My Token Name", "Token-Symbol");
};
*/

module.exports = function(deployer) {
  deployer.then(async () => {
      await deployer.deploy(SquareVerifier);
      await deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "My Token Name", "Token-Symbol");
  });
};