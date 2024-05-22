const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const BXStaking = artifacts.require("BXStaking");

module.exports = async function (deployer) {
  await deployProxy(BXStaking,{ deployer, kind: "uups" });
};
