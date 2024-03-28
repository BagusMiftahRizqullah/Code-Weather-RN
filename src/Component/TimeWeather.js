import {StyleSheet, TouchableOpacity, FlatList, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';

const TimeWeather = props => {
  const homeReducer = useSelector(state => state.homeReducer);
  const TimeSlots = [
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style={{padding: 12, alignItems: 'center'}}>
        <Text style={{color: '#000000'}}>{TimeSlots[index]}</Text>

        <TouchableOpacity>
          <FastImage
            style={{width: 53, height: 53}}
            source={{
              uri: `http://openweathermap.org/img/wn/${item?.icon}.png`,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>

        <Text style={{color: '#000000'}}>
          {`${
            Math.floor(homeReducer?.DataWeather?.main?.temp) %
            Math.floor(homeReducer?.DataWeather?.main?.feels_like)
          }°C`}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: 4}}
        keyExtractor={(item, index) => index}
        data={[
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
          homeReducer?.DataWeather?.weather[0],
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TimeWeather;
