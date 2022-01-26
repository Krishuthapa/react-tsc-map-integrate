import React from 'react';

import { IconTabPropInterface } from '../interface/IconTabsInterface';

import { TabContainer, TabIcon } from '../styles/IconTab.css';

/**
 * Function implementing the component for the individual tab.
 *
 * @param props
 * @returns {CustomElements}
 */
export function IconTab(props: IconTabPropInterface) {
  const { icon, isSelected, onTabClick, tabIndex } = props;

  return (
    <TabContainer
      isSelected={isSelected}
      onClick={() => onTabClick({ isSelected, tabIndex, icon })}
    >
      <TabIcon icon={icon} />
    </TabContainer>
  );
}
