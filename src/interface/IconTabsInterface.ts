export interface IconTabInterface {
  icon: string;
  isSelected: boolean;
  tabIndex: number;
}

export interface IconTabsInterface {
  tabs: Array<IconTabInterface>;
  onTabClick: Function;
}

export interface IconTabPropInterface {
  icon: string;
  isSelected: boolean;
  tabIndex: number;
  onTabClick: Function;
}
