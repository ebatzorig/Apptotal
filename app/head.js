'use strict';

import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import images from './config/images';
import styles from './../style/index';

class headProfile extends Component {

  render(){
    return (
      <View style={styles.viewStyle}>
        <TouchableHighlight underlayColor="#f8f8f8">
        <Image
            style={styles.homeIcon}
            source={images.home}
          />
        </TouchableHighlight>
          <Image
            style={styles.logo}
            source={images.logo}
          />
          <Image
            style={styles.menuIcon}
            source={images.menu}
          />
      </View>
      );
  }

}

export default headProfile;