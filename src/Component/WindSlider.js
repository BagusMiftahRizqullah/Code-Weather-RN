import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
const WindSlider = () => {
  const [wind, setWind] = useState(0);
  const windStatus = ['Light', 'Moderate', 'Strong'];
  return (
    <View style={{paddingTop: 1, paddingHorizontal: 12}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
            fontWeight: 'bold',
          }}>
          Wind:
        </Text>
        <Text>{`${windStatus[wind]}`}</Text>
      </View>
      <Slider
        style={{
          height: heightPercentageToDP('15%'),
        }}
        minimumValue={0}
        maximumValue={2}
        step={2}
        minimumTrackTintColor="#3EB489"
        maximumTrackTintColor="#929292"
        thumbTintColor="#ffffff"
        onValueChange={value => {
          setWind(value);
        }}
        value={wind}
      />
    </View>
  );
};

export default WindSlider;

const styles = StyleSheet.create({});
