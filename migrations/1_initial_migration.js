const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const CalsoftStaking = artifacts.require("CalsoftStaking");

module.exports = async function (deployer) {
  await deployProxy(CalsoftStaking,{ deployer, kind: "uups" });
};
