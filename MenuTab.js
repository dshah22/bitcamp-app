import React, { Component } from 'react';
import { Platform } from 'react-native';

import ScheduleScene from './scenes/ScheduleScene';
import CompanyInfoScene from './scenes/CompanyInfoScene';
import MapScene from './scenes/MapScene';
import MentorsScene from './scenes/MentorsScene';
import IntroScene from './scenes/IntroScene';

//credit to/documentation at
//https://github.com/skv-headless/react-native-scrollable-tab-view

import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class MenuTab extends Component {

  render() {
    let menuTabPosition;
    if (Platform.OS === 'android') {
      menuTabPosition = "top";
    }
    else {
      menuTabPosition = "bottom";
    }

    return (
      <ScrollableTabView tabBarPosition={menuTabPosition}>
        <IntroScene tabLabel="Intro"/>
        <ScheduleScene tabLabel="Schedule" />
        <MapScene tabLabel="Map" />
        <CompanyInfoScene tabLabel="Company Info" />
        <MentorsScene tabLabel="Mentors" />
      </ScrollableTabView>
    )
  }
}