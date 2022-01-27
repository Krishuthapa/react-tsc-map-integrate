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
        <FlagIcon />
        <Title>Location {locationNumber}</Title>
      </HeaderContainer>

      <LocationContainer>
        <LocationInfoItem>
          <InfoKey>Lat</InfoKey>
          <InfoValue>{latitude}</InfoValue>
        </LocationInfoItem>

        <LocationInfoItem>
          <InfoKey>Long</InfoKey>
          <InfoValue>{longitude}</InfoValue>
        </LocationInfoItem>
      </LocationContainer>
    </InfoContainer>
  );
}
