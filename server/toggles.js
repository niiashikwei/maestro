var YAML = require('yamljs');
exports.toggles = YAML.load('feature-toggles.yaml');
