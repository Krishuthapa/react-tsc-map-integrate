import React from 'react';

import { IconTabsInterface } from '../interface/IconTabsInterface';

import { IconTab } from './IconTab';

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
