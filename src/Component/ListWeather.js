import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import IconMenu from 'react-native-vector-icons/Feather';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {LineChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';

const ListWeather = () => {
  const homeReducer = useSelector(state => state.homeReducer);
  const [isSelected, setSelected] = useState(null);
  const [detail, setDetail] = useState(false);
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
      {detail ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {TimeSlots?.map((v, i) => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(i);
                    }}
                    style={{
                      backgroundColor: isSelected === i ? '#D3D3D3' : '#ffffff',
                      paddingHorizontal: 3,
                      paddingVertical: 4,
                      borderRadius: 8,
                      alignItems: 'center',
                    }}>
                    <Text>{`Thu`}</Text>
                    <Text>{`28`}</Text>
                  </TouchableOpacity>
                  <View style={{width: 12}} />
                </View>
              );
            })}
            <TouchableOpacity onPress={() => setDetail(!detail)}>
              <IconMenu
                name="menu"
                size={22}
                color="#000000"
                style={{marginRight: 8}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 8,
              width: widthPercentageToDP('100%'),
              height: 2,
              backgroundColor: '#D9D9D9',
              opacity: 0.5,
            }}
          />
          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: '#000000',
                  fontWeight: 'bold',
                }}>
                Light Rain
              </Text>
              <Text>Moderate breeze</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>52/46 F</Text>
              <FastImage
                style={{width: 43, height: 43}}
                source={{
                  uri: 'https://openweathermap.org/img/wn/09d.png',
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </View>
          <LineChart
            data={{
              labels: TimeSlots,
              datasets: [
                {
                  data: [5, 2.5, 1.5],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={120}
            chartConfig={{
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              backgroundColor: '#ffffff',
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `green`,
              labelColor: (opacity = 1) => `green`,
              style: {},
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              alignItems: 'center',
            }}
          />
          <View style={{flex: 1, marginVertical: 32}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Precipitation</Text>
              <Text>0.144in</Text>
            </View>
            <View style={{height: 23}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Probability of precipitation</Text>
              <Text>100%</Text>
            </View>
            <View style={{height: 23}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>wind</Text>
              <Text>7.7m/s SSW</Text>
            </View>
            <View style={{height: 23}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Pressure</Text>
              <Text>988hPa</Text>
            </View>
            <View style={{height: 23}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Humidity</Text>
              <Text>73%</Text>
            </View>
            <View style={{height: 23}} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>UV index</Text>
              <Text>2.1</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {TimeSlots?.map((v, i) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setSelected(i), setDetail(!detail);
                  }}
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
                <View
                  style={{flex: 1, height: 2, backgroundColor: '#f2f2f2'}}
                />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default ListWeather;
