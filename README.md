ember-cli-vibrant
==============================================================================


Integrates [node-vibrant](https://github.com/akfish/node-vibrant/) into Ember applications.


Features
------------------------------------------------------------------------------


* Inject vibrant support into any controller, component, or route.
* Performs color extractions in the background to minimize performance impact.
* Cache color extractions for fast look up.


Installation
------------------------------------------------------------------------------


    ember install ember-cli-vibrant


Usage
------------------------------------------------------------------------------

First, inject the `vibrant` service into a route, component, or controller.

```javascript
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend ({
  vibrant: service (),
});
```

Then, use `fromUrl` to extract the colors for an image.

```javascript
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend ({
  vibrant: service (),
  
  didInsertElement () {
    this._super (...arguments);
    const { vibrant, url } = this.getProperties (['vibrant', 'url']);
    
    vibrant.fromUrl (url).then (palette => {
      
    });
  }
});
```

The `palette` parameter will contain the following swatches, if found:

* Vibrant
* Muted
* DarkVibrant
* DarkMuted
* LightVibrant
* LightMuted

See the [Swatch class](https://github.com/akfish/node-vibrant/#vibrantswatch) for a complete
list of methods available to you.

### Caching Color Swatches

You can pass in an optional key parameter to cache the swatches for future references. This 
is useful when you need to access the same swatches from different locations in the application.

```javascript
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend ({
  vibrant: service (),
  
  didInsertElement () {
    this._super (...arguments);
    const { vibrant, url, id } = this.getProperties (['vibrant', 'url']);
    
    vibrant.fromUrl (url, id).then (palette => {
      
    });
  }
});
```

As shown in the example above, the second parameter to `fromUrl` the key you want to 
cache the color swatches. If the key exists, then the service will returned the cached
results. If the key does not exist, then the service will compute the color swatches
and store them under the provided key.

> If you do not provide a key, then the service will cache the swatches using the 
> provided url. In many cases, just using the url to cache the swatches is acceptable.
> In other cases where the image is the same and the url changes, then caching based
> on the url will result in recomputing the swatches each time the url changes.