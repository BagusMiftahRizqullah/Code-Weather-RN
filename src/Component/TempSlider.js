import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';
const TempSlider = () => {
  const [temp, setTemp] = useState(0);

  return (
    <View style={{paddingTop: 32, paddingHorizontal: 12}}>
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
          Temperature:
        </Text>
        <Text>{`${temp}°C`}</Text>
      </View>
      <Slider
        style={{
          height: heightPercentageToDP('15%'),
        }}
        minimumValue={0}
        maximumValue={20}
        step={1}
        minimumTrackTintColor="#3EB489"
        maximumTrackTintColor="#929292"
        thumbTintColor="#ffffff"
        onValueChange={value => {
          setTemp(value);
        }}
        value={temp}
      />
    </View>
  );
};

export default TempSlider;

const styles = StyleSheet.create({});
