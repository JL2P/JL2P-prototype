const {
  // useBabelRc,
  addDecoratorsLegacy,
  disableEsLint,
  override,
} = require("customize-cra");

module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy() /*, useBabelRc()*/),
};
