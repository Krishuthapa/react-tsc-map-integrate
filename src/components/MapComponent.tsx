import React, { useEffect, useRef } from 'react';

import Map from 'ol/Map';

import useDrawCirlces from '../hooks/useDrawCircles';

import { MapContainer } from '../styles/MapComponent.css';

import MapInstanceSingleton from '../services/MapInstance';

import { isEmpty as isArrayEmpty } from '../utils/array';
import { isEmpty as isObjectEmpty } from '../utils/object';
import { MapComponentPropsInterface } from '../interface/MapComponentInterface';

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
function MapComponent(props: MapComponentPropsInterface) {
  const mapDivRef = useRef<HTMLInputElement>(null);

  const { markers: mapCircles } = props;

  /**
   * Invoked when their is change in the value of reference variable
   * mapDivRef.
   */
  useEffect(() => {
    if (!mapDivRef.current) {
      return;
    }

    getMapInstance(mapDivRef.current);
  }, [mapDivRef]);

  /**
   * Invoked when the values for the mapCircles is updated.
   *
   * mapCircles hold the location to display circles in map.
   */
  useEffect(() => {
    if (!isObjectEmpty(mapCircles) && !isArrayEmpty(mapCircles.locations)) {
      if (!mapDivRef.current) {
        return;
      }

      const mapInstance = getMapInstance(mapDivRef.current);

      useDrawCirlces(mapInstance, mapCircles);
    }
  }, [mapCircles]);

  return <MapContainer className="map" id="map" ref={mapDivRef} />;
}

export default MapComponent;
