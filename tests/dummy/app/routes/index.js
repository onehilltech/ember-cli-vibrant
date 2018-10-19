import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

const URL = 'https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?cs=srgb&dl=bllom-blossom-desktop-backgrounds-1322185.jpg&fm=jpg';

export default Route.extend({
  vibrant: service (),

  setupController () {
    this._super (...arguments);

    this.get ('vibrant')
      .fromUrl (URL)
      .then (swatches => {
        console.log (swatches);
      })
      .catch (err => {
        console.log (err);
      })
  }
});
