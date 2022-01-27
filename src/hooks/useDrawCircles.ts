import Map from 'ol/Map';
import { Feature } from 'ol';
import Circle from 'ol/geom/Circle';
import { fromLonLat } from 'ol/proj';
import Vector from 'ol/layer/Vector';
import { Style, Stroke } from 'ol/style';
import { Vector as SourceVector } from 'ol/source';

import { MapLocationsInterface } from '../interface/LocationInterface';

/**
 * Hooks for drawing the circle at given map instance at given locations.
 *
 * @param mapInstance
 * @param mapCircles
 * @param radius
 * @param width
 * @param color
 */
export default function useDrawCirlces(
  mapInstance: Map,
  mapCircles: MapLocationsInterface,
  radius: number = 35,
  width: number = 3,
  color: string = '#1572A1'
) {
  if (!mapInstance || !mapCircles) {
    return;
  }

  const markers = new SourceVector({
    features: mapCircles.locations.map(
      (location) =>
        new Feature(new Circle(fromLonLat(location.reverse()), radius))
    ),
  });

  const vectorLayer = new Vector({
    source: markers,
    style: [
      new Style({
        stroke: new Stroke({
          color,
          width,
        }),
      }),
    ],
  });

  mapInstance.addLayer(vectorLayer);
}
