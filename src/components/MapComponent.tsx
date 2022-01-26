import React, { useEffect, useRef, useState } from 'react';

import Map from 'ol/Map';
import { Feature } from 'ol';
import Circle from 'ol/geom/Circle';
import { fromLonLat } from 'ol/proj';
import Vector from 'ol/layer/Vector';
import { Style, Stroke } from 'ol/style';
import { Vector as SourceVector } from 'ol/source';

import { MapContainer } from '../styles/MapComponent.css';

import config from '../config';

import MapInstanceSingleton from '../services/MapInstance';

import { isEmpty as isArrayEmpty } from '../utils/array';
import { isEmpty as isObjectEmpty } from '../utils/object';

/**
 * Function gets the instance of the map.
 *
 * @param reference
 * @returns {Map}
 */
function getMapInstance(reference: HTMLDivElement) {
  const mapInstance: Map = MapInstanceSingleton(reference).getInstance();

  return mapInstance;
}

/**
 * Function implementing the component for map.
 *
 * @returns {CustomElements}
 */
function MapComponent() {
  const mapDivRef = useRef<HTMLInputElement>(null);

  const [mapCircles, setMapCircles] = useState({ locations: [] });

  useEffect(() => {
    fetch(config.apiUrl, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setMapCircles(response);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!mapDivRef.current) {
      return;
    }

    getMapInstance(mapDivRef.current);
  }, [mapDivRef]);

  useEffect(() => {
    if (!isObjectEmpty(mapCircles) && !isArrayEmpty(mapCircles.locations)) {
      if (!mapDivRef.current) {
        return;
      }

      const mapInstance = getMapInstance(mapDivRef.current);
      const markers = new SourceVector({
        features: mapCircles.locations.map(
          (location: Array<number>) =>
            new Feature(new Circle(fromLonLat(location.reverse()), 25))
        ),
      });
      const vectorLayer = new Vector({
        source: markers,
        style: [
          new Style({
            stroke: new Stroke({
              color: '#42c8f5',
              width: 2,
            }),
          }),
        ],
      });

      mapInstance.addLayer(vectorLayer);
    }
  }, [mapCircles]);

  return <MapContainer className="map" id="map" ref={mapDivRef} />;
}

export default MapComponent;
