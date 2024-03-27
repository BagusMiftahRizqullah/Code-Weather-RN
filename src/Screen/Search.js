import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/Feather';
import IconX from 'react-native-vector-icons/AntDesign';
import IconLocation from 'react-native-vector-icons/Octicons';
import IconStar from 'react-native-vector-icons/Feather';

const Search = props => {
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const granted = await Geolocation.requestAuthorization('whenInUse');
        if (granted === 'granted') {
          console.log('IOS GRANTED LOCATION');

          return true;
        } else {
          console.log('IOS NOT GRANTED LOCATION');

          return false;
        }
      } catch (err) {
        console.log('Permission error', err);
        return false;
      }
    } else {
      try {
        // const isGranted = await MapboxGL.requestAndroidLocationPermissions();
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message:
              'Hayuq App requires your location permission to be able to deliver your orders and show you restaurants around you',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === 'granted') {
          console.log('ANDROID GRANTED LOCATION');

          return true;
        } else {
          console.log('ANDROID NOT GRANTED LOCATION');

          return false;
        }
      } catch (err) {
        console.log('Permission error', err);
        return false;
      }
    }
  };

  const getLocation = async () => {
    const result = requestLocationPermission();

    await result
      .then(res => {
        if (res) {
          Geolocation.getCurrentPosition(
            position => {
              getLocConvertAddress(
                position?.coords.latitude,
                position?.coords.longitude,
              );
            },
            error => {
              console.log('locationManager Error: ', error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      })
      .catch(Err => console.log('Error', Err));
  };

  const getLocConvertAddress = async (lat, long) => {
    Geocoder.from(lat, long)
      .then(json => {
        const res = json.results[0].formatted_address;
        const address = res.replace(/^[^,]*\+[^,]*,/, '');
        console.log('ADDRESS', address);
      })
      .catch(error => console.warn(error));
  };

  Geocoder.init('AIzaSyAsI0vNPe8JNzLfI1ltcElk-mRaEOjiv2c');

  return (
    <View style={{padding: 12, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 8,
            borderRadius: 8,
            backgroundColor: '#e6e6e6',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <TextInput
            style={{color: '#000000', width: '80%', height: 40}}
            placeholder="Search"
          />
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <IconX
            name="close"
            size={26}
            color="#000000"
            style={{marginLeft: 8}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          paddingTop: 23,
          padding: 8,

          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => getLocation()}>
        <IconLocation
          name="location"
          size={22}
          color="#000000"
          style={{marginRight: 8}}
        />
        <Text>Find my location</Text>
      </TouchableOpacity>

      {/* Result Search */}
      <ScrollView>
        <TouchableOpacity
          style={{
            paddingTop: 23,
            padding: 8,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => getLocation()}>
          <IconLocation
            name="location"
            size={22}
            color="#000000"
            style={{marginRight: 8}}
          />
          <Text>Find my location</Text>
          <TouchableOpacity>
            <IconStar
              name="star"
              size={22}
              color="#000000"
              style={{marginRight: 8}}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
