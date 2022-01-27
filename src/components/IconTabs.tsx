import React from 'react';

import { IconTab } from './IconTab';

import { IconTabsInterface } from '../interface/IconTabsInterface';

/**
 * Function corresponding the component for the tabs.
 *
 * @param props
 * @returns {CustomElements}
 */
export function IconTabs(props: IconTabsInterface) {
  const { tabs, onTabClick } = props;

  if (tabs) {
    return (
      <div>
        {tabs.map((tab) => (
          <IconTab
            key={tab.tabIndex}
            icon={tab.icon}
            isSelected={tab.isSelected}
            tabIndex={tab.tabIndex}
            onTabClick={onTabClick}
          />
        ))}
      </div>
    );
  }

  return <p>No tabs available.</p>;
}
