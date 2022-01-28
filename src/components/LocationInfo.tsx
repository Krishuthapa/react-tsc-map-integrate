import React from 'react';

import { LocationInfoInterface } from '../interface/LocationInterface';

import {
  FlagIcon,
  HeaderContainer,
  InfoContainer,
  InfoKey,
  InfoValue,
  LocationContainer,
  LocationInfoItem,
  Title,
} from '../styles/LocationInfo.css';

/**
 * Component rendering the individual location info of circle in the map.
 *
 * @param props
 * @returns {CustomElement}
 */
export function LocationInfo(props: LocationInfoInterface) {
  const { longitude, latitude, locationNumber } = props;

  return (
    <InfoContainer>
      <HeaderContainer>
        <FlagIcon data-testid="flag-icon" />
        <Title>Location {locationNumber}</Title>
      </HeaderContainer>

      <LocationContainer>
        <LocationInfoItem>
          <InfoKey>Lat</InfoKey>
          <InfoValue data-testid="latitude-value">{latitude}</InfoValue>
        </LocationInfoItem>

        <LocationInfoItem>
          <InfoKey>Long</InfoKey>
          <InfoValue data-testid="longitude-value">{longitude}</InfoValue>
        </LocationInfoItem>
      </LocationContainer>
    </InfoContainer>
  );
}
