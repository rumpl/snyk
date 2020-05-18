const abbrev = require('abbrev');
// const require = require('../../lib/require')(__dirname);
require('../../lib/spinner').isRequired = false;

// the aim of this module is to load as little as possible to keep cli boot
// time as low as possible

const commands = {
  auth: require('./auth'),
  config: require('./config'),
  help: require('./help'),
  ignore: require('./ignore'),
  // modules: require('./modules'),
  monitor: require('./monitor'),
  policy: require('./policy'),
  protect: require('./protect'),
  test: require('./test'),
  version: require('./version'),
  wizard: require('./protect/wizard'),
  woof: require('./woof'),
};
commands.aliases = abbrev(Object.keys(commands));
commands.aliases.t = 'test';
module.exports = commands;
