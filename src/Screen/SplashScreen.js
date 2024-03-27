import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import IconApp from '../Assets/images/IconApp.png';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
    }, 800);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <FastImage
          style={styles.icon}
          source={IconApp}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.text}>Fetching the weather...</Text>
      </View>
      <View style={{paddingTop: heightPercentageToDP(24)}}>
        <Text style={{color: '#000000'}}>OpenWheather</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  containerIcon: {paddingTop: heightPercentageToDP(24)},
  icon: {
    alignSelf: 'center',
    width: 120,
    height: 120,
  },
  text: {color: '#000000'},
});
