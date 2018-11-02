/* global Vibrant, Swatch */

import Service from '@ember/service';

import { isPresent } from '@ember/utils';
import { Promise } from 'rsvp';

export default Service.extend ({
  palettes: null,

  init () {
    this._super (...arguments);

    this.set ('palettes', {});
  },

  clear () {
    this.set ('palettes', {});
  },

  fromUrl (url, key) {
    key = key || url;
    let palette = this.palettes[key];

    if (isPresent (palette)) {
      return Promise.resolve (palette);
    }

    return Vibrant.from (url).getPalette ().then (palette => {
      this.palettes[key] = palette;

      return palette;
    });
  }
});
