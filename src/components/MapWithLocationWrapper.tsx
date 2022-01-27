import React, { useEffect, useState } from 'react';

import config from '../config';

import MapComponent from './MapComponent';
import { MapLocations } from './MapLocations';

import { isEmpty as isArrayEmpty } from '../utils/array';
import { isEmpty as isObjectEmpty } from '../utils/object';

import { Navbar } from '../styles/Navbar.css';
import { MapAndLocationContainer } from '../styles/MapWithLocationWrapper.css';

export function MapWithLocationWrapper() {
  const [mapLocations, setMapLocations] = useState({ locations: [] });

  /**
   * Hooks invoked at the first and only once to fetch the
   * required data.
   */
  useEffect(() => {
    fetch(config.apiUrl, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setMapLocations(response);
      })
      .catch((error) => console.log(error));
  }, []);

  /**
   * Renders the compnent for the map locations.
   *
   * @returns {CustomElement}
   */
  const mapLocationsRenderer = () => {
    if (!isObjectEmpty(mapLocations) && !isArrayEmpty(mapLocations.locations)) {
      return (
        <Navbar>
          <MapLocations locations={mapLocations.locations} />
        </Navbar>
      );
    }

    return <Navbar />;
  };

  return (
    <MapAndLocationContainer>
      {mapLocationsRenderer()}

      <MapComponent markers={mapLocations} />
    </MapAndLocationContainer>
  );
}
