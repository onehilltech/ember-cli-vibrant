/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-vibrant',

  isDevelopingAddon() {
    return true;
  },

  included (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/node-vibrant/dist/vibrant.js',
      production: 'node_modules/node-vibrant/dist/vibrant.min.js'
    });

    app.import ({
      development: 'node_modules/node-vibrant/dist/vibrant.worker.js',
      production: 'node_modules/node-vibrant/dist/vibrant.worker.min.js'
    });
  }
};
