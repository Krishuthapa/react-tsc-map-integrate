import styled from 'styled-components';

import {
  TabCSSInterface,
  TabIconInterface,
} from '../interface/IconTabCssInterface';

export const TabContainer = styled.div<TabCSSInterface>`
  border-radius: 5px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? '#1F4782' : '#ffffff')};

  &:hover {
    background: #feece9;
  }
`;

export const TabIcon = styled.img.attrs((props: TabIconInterface) => ({
  src: props.icon,
}))<TabIconInterface>`
  width: 20px;
  height: 20px;
`;
