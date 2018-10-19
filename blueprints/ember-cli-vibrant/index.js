/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    { name: 'node-vibrant', target: '3.0.0' }
  ]
});
