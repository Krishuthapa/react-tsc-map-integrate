import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

let instance: Map | undefined;

/**
 * Immediately invoked function to implement singleton pattern for storing map
 * instance.
 *
 * @param reference Reference to the div in which map is rendered.
 * @returns {Object}
 */
const MapInstanceSingleton = (reference: HTMLDivElement | undefined) => {
  function createInstance() {
    const map: Map = new Map({
      target: reference,
      controls: [],
      view: new View({
        center: fromLonLat([126.9779451, 37.5662952]),
        zoom: 16,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    return map;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
    clearInstance: () => {
      instance = undefined;
    },
  };
};

export default MapInstanceSingleton;
