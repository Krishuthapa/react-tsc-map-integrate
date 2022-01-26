import React, { useEffect, useRef, useState } from 'react';

import { IconTabs } from './IconTabs';

import MapComponent from './MapComponent';

import { IconTabInterface } from '../interface/IconTabsInterface';

import { tabs } from '../constants/constants';

import MapInstanceSingleton from '../services/MapInstance';

import { Navbar } from '../styles/Navbar.css';
import { TabsWrapper } from '../styles/IconTabs.css';
import { MainWrapper, MapContentWrapper } from '../styles/LandingPage.css';

/**
 * Function holding the component for the landing page.
 *
 * @returns {CustomElements}
 */
export function LandingPage() {
  const [tabsInfo, setTabsInfo] = useState(tabs);

  /**
   * Function handling the tab click.
   *
   * @param tabInfo
   * @returns
   */
  const onTabsClick = (tabInfo: IconTabInterface) => {
    const extractedTab = tabsInfo.find((tab) => tab.isSelected);

    if (extractedTab?.tabIndex === 2 || extractedTab?.tabIndex === 3) {
      MapInstanceSingleton(undefined).clearInstance();
    }

    if (extractedTab && extractedTab.tabIndex === tabInfo.tabIndex) {
      return;
    }

    const updatedTabs = tabsInfo.map((tab) => {
      if (tab.tabIndex === tabInfo.tabIndex) {
        return { ...tab, isSelected: true };
      }
      return { ...tab, isSelected: false };
    });

    setTabsInfo(updatedTabs);
  };

  /**
   * Function returns the content to be rendered based on the selected tabs.
   *
   * @returns {CustomElement}
   */
  const getRenderContent = () => {
    const extractedTab = tabsInfo.find((tab) => tab.isSelected);

    if (extractedTab?.tabIndex === 1) {
      return (
        <MapContentWrapper>
          <MapComponent />
        </MapContentWrapper>
      );
    }

    if (extractedTab?.tabIndex === 2) {
      return <Navbar />;
    }

    if (extractedTab?.tabIndex === 3) {
      return <Navbar />;
    }

    return <Navbar />;
  };

  return (
    <MainWrapper>
      <TabsWrapper>
        <IconTabs tabs={tabsInfo} onTabClick={onTabsClick} />
      </TabsWrapper>
      <div>{getRenderContent()}</div>
    </MainWrapper>
  );
}
