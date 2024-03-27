import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {LineChart} from 'react-native-chart-kit';
import {IconSetting} from '../Assets/images';
import {heightPercentageToDP} from 'react-native-responsive-screen';
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const ComponentLineChart = () => {
    return (
      <LineChart
        data={{
          labels: [
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
          ],
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
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor: '#ffffff',
        }}
      />
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{padding: 12, alignItems: 'center'}}>
        <Text>18:30</Text>
        <View style={{height: 12}} />
        <FastImage
          style={{width: 20, height: 20}}
          source={IconSetting}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{height: 12}} />
        <Text>27°C</Text>
      </View>
    );
  };

  const onRefresh = useCallback(() => {});

  return (
    <View style={styles.contaner}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}>
        <TouchableOpacity style={styles.containerSearch}>
          <Icon
            name="search"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <Text style={styles.textSearch}>Indonesia</Text>
        </TouchableOpacity>
        <View style={styles.containerSetting}>
          <TouchableOpacity>
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FastImage
              style={{width: 20, height: 20, marginRight: 12}}
              source={IconSetting}
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
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 76, color: '#000000'}}>27°C</Text>
            <Text style={{fontSize: 13, color: '#000000'}}>Feel Like 31°C</Text>
            <Text
              style={{
                paddingTop: 32,
                fontSize: 13,
                fontWeight: 'bold',
                color: '#000000',
              }}>
              No precipitation within an hour
            </Text>
          </View>
          <ComponentLineChart />

          {/* Data Wind */}
          <View
            style={{
              backgroundColor: '#e4e4e4',
              padding: 4,
              width: '100%',
              borderRadius: 8,
            }}>
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
                  Wind:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  3.8m/s W
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
                  Humidity:
                </Text>
                <Text
                  style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>
                  3.8m/s W
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
                  3.8m/s W
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
                  1010hPa
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
                  10.0km
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
                  27°C
                </Text>
              </View>
            </View>
          </View>

          {/* Flatlist perr icon */}
          <View>
            <FlatList
              horizontal
              keyExtractor={item => item}
              data={[1, 2, 3, 4, 5, 6, 7]}
              renderItem={renderItem}
            />
          </View>
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
    paddingVertical: 24,
    paddingHorizontal: 18,
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
});
