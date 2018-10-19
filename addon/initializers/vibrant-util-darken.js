/* global Vibrant */

export function initialize(/* application */) {
  Vibrant.Util.darken = function (rgb, percentage) {
    let change = 1.0 - percentage;

    return [
      rgb[0] * change,
      rgb[1] * change,
      rgb[2] * change
    ];
  };
}

export default {
  initialize
};
