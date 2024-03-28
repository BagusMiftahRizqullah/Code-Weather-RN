import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';

const ListWeather = () => {
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
  return (
    <View style={{flex: 1}}>
      {TimeSlots?.map((v, i) => {
        return (
          <View>
            <TouchableOpacity
              key={i}
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>{`Thu Mar ${1 + i++}`}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>
                  {`${
                    Math.floor(homeReducer?.DataWeather?.main?.temp) %
                    Math.floor(homeReducer?.DataWeather?.main?.feels_like)
                  }°C`}
                </Text>
                <FastImage
                  style={{width: 53, height: 53}}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${homeReducer?.DataWeather?.weather[0].icon}.png`,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <IconGoRight
                  name="navigate-next"
                  size={22}
                  color="#000000"
                  style={{marginRight: 8}}
                />
              </View>
            </TouchableOpacity>
            <View style={{flex: 1, height: 2, backgroundColor: '#f2f2f2'}} />
          </View>
        );
      })}
    </View>
  );
};

export default ListWeather;
