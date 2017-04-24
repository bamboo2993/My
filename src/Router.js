import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from './pages/home';
import like from './pages/like';
//import Me from './components/Me';
//import Setting from './components/Setting';



import SearchResult from './components/SearchResult'

export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => ({
        title: '主頁',
      })
    },
  },
  ＳearchResult: {
    screen: SearchResult,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.title.toUpperCase()}`,
      })
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      header: () => ({
        title: 'ME',
      })
    },
  },
},
{
  // headerMode: 'none',
}
);

export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: () => ({
        title: 'SETTING',
      })
    },
  },
});

export const TabRouter = TabNavigator(
  {
    AlbumStack: {
      screen: AlbumStack,
      navigationOptions: {
        tabBar: {
          label: 'Albums',
          icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
      },
    },
    MeStack: {
      screen: MeStack,
      navigationOptions: {
        tabBar: {
          label: 'Me',
          icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
    },
    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        tabBar: {
          label: 'Setting',
          icon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
  }
);