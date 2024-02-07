import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeLogo from '../../../assets/images/icons/HomeLogo';
import Finished from '../../screens/Finished/Finished';
import Create from '../../screens/Create/Create';
import Search from '../../screens/Search/Search';
import Settings from '../../screens/Settings/Settings';
import FinishedLogo from '../../../assets/images/icons/FinishedLogo';
import CreateLogo from '../../../assets/images/icons/CreateLogo';
import SearchLogo from '../../../assets/images/icons/SearchLogo';
import SettingsLogo from '../../../assets/images/icons/SettingsLogo';
import HomeTabs from './HomeTabs';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  const commonOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeTabs}
        options={{
          ...commonOptions,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: info => {
            return <HomeLogo hoverColor={info.focused && '#6A3EA1'} />;
          },
        }}
      />
      <Tab.Screen
        name="Finished"
        component={Finished}
        options={{
          ...commonOptions,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: info => {
            return <FinishedLogo hoverColor={info.focused && '#6A3EA1'} />;
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          ...commonOptions,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: info => {
            return <CreateLogo hoverColor={info.focused && '#6A3EA1'} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          ...commonOptions,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: info => {
            return <SearchLogo hoverColor={info.focused && '#6A3EA1'} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          ...commonOptions,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: info => {
            return <SettingsLogo hoverColor={info.focused && '#6A3EA1'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
