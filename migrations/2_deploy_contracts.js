var TavToken = artifacts.require("./TavToken.sol");
var TokenEconomics = artifacts.require("./TokenEconomics.sol");

module.exports = function(deployer) {
  deployer.deploy(TavToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(TokenEconomics, TavToken.address, tokenPrice);
  });
};