/* global Vibrant */

import Service from '@ember/service';

import { isPresent } from '@ember/utils';
import { Promise } from 'rsvp';

export default Service.extend ({
  // Cache of palettes for quick lookup of past computations.
  _palettes: null,

  init () {
    this._super (...arguments);

    this._palettes = {};
  },

  clear () {
    this._palettes = {};
  },

  fromUrl (url) {
    let palette = this._palettes[url];

    if (isPresent (palette)) {
      return Promise.resolve (palette);
    }

    return Vibrant.from (url).getPalette ().then (palette => {
      this._palettes[url] = palette;

      return palette;
    });
  }
});
