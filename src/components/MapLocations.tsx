import React from 'react';

import { LocationInfo } from './LocationInfo';

import { MapLocationsInterface } from '../interface/LocationInterface';

import {
  LocationInfoWrapper,
  LocationsContainer,
} from '../styles/MapLocations.css';

/**
 * Component rendering the list of locations represented by circles in the
 * navbar.
 *
 * @param props
 * @returns {CustomElement}
 */
export function MapLocations(props: MapLocationsInterface) {
  const { locations } = props;

  return (
    <LocationsContainer>
      {locations &&
        locations.map((location, index) => (
          <LocationInfoWrapper>
            <LocationInfo
              latitude={location[0]}
              longitude={location[1]}
              locationNumber={index + 1}
            />
          </LocationInfoWrapper>
        ))}
    </LocationsContainer>
  );
}
