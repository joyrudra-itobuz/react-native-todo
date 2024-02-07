import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import SignIn from '../../screens/SignIn/SignIn';
import SignUP from '../../screens/SignUp/SignUp';
import Icon from 'react-native-vector-icons/FontAwesome';

import {View, Text, TouchableOpacity} from 'react-native';
import HomeLogo from '../../../assets/images/icons/HomeLogo';
import Finished from '../../screens/Finished/Finished';
import Create from '../../screens/Create/Create';
import Search from '../../screens/Search/Search';
import Settings from '../../screens/Settings/Settings';
import FinishedLogo from '../../../assets/images/icons/FinishedLogo';
import CreateLogo from '../../../assets/images/icons/CreateLogo';
import SearchLogo from '../../../assets/images/icons/SearchLogo';
import SettingsLogo from '../../../assets/images/icons/SettingsLogo';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#273ab7' : '#111'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  const commonOptions = {
    headerShown: false,
  };

  return (
    <Tab.Navigator
    // initialRouteName="Home"
    // tabBar={props => (
    //   <MyTabBar
    //     key={Math.floor(Math.random * 0xffffff).toString(16)}
    //     {...props}
    //   />
    // )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
