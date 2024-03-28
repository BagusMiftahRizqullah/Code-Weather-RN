import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useState, useRef, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-chart-kit';
import {IconSetting} from '../../Assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {HOME_ACTION} from './Home.Action';
import TimeWeather from '../../Component/TimeWeather';
import ListWeather from '../../Component/ListWeather';

const Home = props => {
  const dispatch = useDispatch();
  // const appState = useRef(AppState.currentState);
  const [refreshing, setRefreshing] = useState(false);

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

  // const _handleAppStateChange = nextAppState => {
  //   if (
  //     appState.current.match(/inactive|background/) &&
  //     nextAppState === 'active'
  //   ) {
  //     console.log('App has come to the foreground!');
  //     onRefresh();
  //     //clearInterval when your app has come back to the foreground
  //   } else {
  //     //app goes to background
  //     console.log('app goes to background');

  //     appState.current = nextAppState;
  //     console.log('AppState', appState.current);
  //   }
  // };

  // useEffect(() => {
  //   AppState.addEventListener('change', _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };
  // }, []);

  const ComponentLineChart = () => {
    return (
      <LineChart
        data={{
          labels: TimeSlots,
          datasets: [
            {
              data: [5, 2.5, 1.5],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={120}
        chartConfig={{
          backgroundColor: '#ffffff',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `white`,
          labelColor: (opacity = 1) => `white`,
          style: {},
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#ffffff',
        }}
      />
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch({
      type: HOME_ACTION.GET_DATA_HOME,
      payload: {country: homeReducer?.DataWeather.name},
    });
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  });

  return (
    <View style={styles.contaner}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SearchScreen')}
          style={styles.containerSearch}>
          <Icon
            name="search"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <Text style={styles.textSearch}>
            {homeReducer?.DataWeather?.name}
          </Text>
        </TouchableOpacity>
        <View style={styles.containerSetting}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SettingScreen')}>
            <FastImage
              style={{width: 20, height: 20}}
              source={IconSetting}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={{
          flex: 1,
          marginTop: 24,
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.containerOverCast}>
            <FastImage
              style={{width: 60, height: 60, marginRight: 12}}
              source={{
                uri: `http://openweathermap.org/img/wn/${homeReducer?.DataWeather?.weather[0]?.icon}.png`,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View>
              <Text style={{fontSize: 16, color: '#000000'}}>
                Over Cast Cloud
              </Text>
              <Text style={{fontSize: 13, color: '#D3D3D3'}}>
                Gentel Breeze
              </Text>
            </View>
          </View>
          <View style={styles.containerTemperature}>
            <Text style={styles.textTemparature}>{`${Math.floor(
              homeReducer?.DataWeather?.main?.temp,
            )
              .toString()
              .substring(0, 3 - 1)}°C`}</Text>
            <Text style={styles.textTempStatus}>{`Feel Like ${Math.floor(
              homeReducer?.DataWeather?.main?.feels_like,
            )
              .toString()
              .substring(0, 3 - 1)}°C`}</Text>
            <Text style={styles.textStatusDesc}>
              No precipitation within an hour
            </Text>
          </View>
          <ComponentLineChart />

          {/* Data Wind */}
          <View style={styles.containerDataWind}>
            <View style={styles.secondContainerWind}>
              <View style={styles.windData}>
                <Text style={styles.textWind}>Wind:</Text>
                <Text style={styles.resWind}>3.8m/s W</Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000000',
                    fontWeight: 'bold',
                  }}>
                  Humidity:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {`${homeReducer?.DataWeather?.main?.humidity}%`}
                </Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000000',
                    fontWeight: 'bold',
                  }}>
                  UV index:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {`${
                    homeReducer?.DataWeather?.current?.uvi
                      ? homeReducer?.DataWeather?.current?.uvi
                      : 0
                  }m/s W`}
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 8,
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000000',
                    fontWeight: 'bold',
                  }}>
                  Pressure:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {`${homeReducer?.DataWeather?.main?.pressure}hPa`}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000000',
                    fontWeight: 'bold',
                  }}>
                  Visibility:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {`${Number(homeReducer?.DataWeather?.visibility) / 10}km`}
                </Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#000000',
                    fontWeight: 'bold',
                  }}>
                  Dew point:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  {`${
                    Math.floor(homeReducer?.DataWeather?.main?.temp) %
                    Math.floor(homeReducer?.DataWeather?.main?.feels_like)
                  }°C`}
                </Text>
              </View>
            </View>
          </View>

          {/* Flatlist perr icon */}
          <View style={{flex: 1}}>
            <TimeWeather />
          </View>
        </View>
        <View style={{flex: 1}}>
          <ListWeather />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSearch: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  containerSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerOverCast: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTemperature: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTemparature: {
    fontSize: 76,
    color: '#000000',
  },
  textTempStatus: {
    fontSize: 13,
    color: '#000000',
  },
  textStatusDesc: {
    paddingTop: 32,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000000',
  },
  containerDataWind: {
    backgroundColor: '#e4e4e4',
    padding: 4,
    width: '100%',
    borderRadius: 8,
  },
  secondContainerWind: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 8,
  },
  windData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textWind: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  resWind: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
});
