import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Setting = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconGoback
            style={{marginRight: 8}}
            name="chevron-back"
            size={22}
            color="#000000"
          />
          <Text style={{fontSize: 16, color: '#000000', fontWeight: 'bold'}}>
            Home
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000000', fontWeight: 'bold'}}>
          Settings
        </Text>
        <View style={{width: widthPercentageToDP('20%'), height: 24}} />
      </View>

      <TouchableOpacity
        style={{
          paddingTop: 23,
          padding: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>Different weather</Text>
        <TouchableOpacity>
          <IconGoRight
            name="navigate-next"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          paddingTop: 23,
          padding: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text>Customize units</Text>
        <TouchableOpacity>
          <IconGoRight
            name="navigate-next"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          padding: 8,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{color: '#000000'}}>Data</Text>
        <Text style={{color: '#000000'}}>One Call API</Text>
      </View>
      <View style={{padding: 8}}>
        <Text style={{color: '#000000', textAlign: 'justify'}}>
          All the data for OpenWeather App is provided by On Call Api.
          OpenWeather aggregates and processes meteorological data from tens of
          thousands of weather stations, on-ground radars and satelitesto bring
          you accurate and actionable weather data for any location worldwide
        </Text>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
});
