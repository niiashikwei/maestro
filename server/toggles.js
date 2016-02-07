var YAML = require('yamljs');
var toggles = YAML.load('feature-toggles.yaml');

if(process.env.NODE_ENV === 'production'){
    toggles = [].concat(toggles.production);
} else {
    toggles = [].concat(toggles.dev)
}

console.log("Loading [" + process.env.NODE_ENV + "] features: " + toggles);

exports.toggles = toggles;
