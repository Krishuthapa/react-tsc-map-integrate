import styled from 'styled-components';

import Flag from '../images/flag.svg';

export const InfoContainer = styled.div`
  display: flex;
  width: 200px;
  padding: 14px 24px;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const FlagIcon = styled.img.attrs({ src: Flag })`
  width: 14px;
  height: 20px;
`;

export const Title = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: #4d4c4c;
  margin: 0 0 0 8px;
`;

export const LocationContainer = styled.div`
  width: 190px;
  display: flex;
  flex-direction: column;
  height: 74px;
  justify-content: space-between;
`;

export const LocationInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoKey = styled.div`
  color: #4d4c4c;
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
`;

export const InfoValue = styled.div`
  border: 0.5px solid #c7c7c7;
  border-radius: 5px;
  width: 134px;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 6px;
  color: #2b4877;
  font-size: 18px;
  font-weight: 500;
`;
