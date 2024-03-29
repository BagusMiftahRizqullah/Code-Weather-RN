import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import SwitchSelector from 'react-native-switch-selector';

const CuzUnit = props => {
  // const [temperature, setTemperatur] = useState('C');
  return (
    <View style={{flex: 1}}>
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
          <Text style={{fontSize: 16, color: '#000000'}}>Settings</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000000', fontWeight: 'bold'}}>
          Units
        </Text>
        <View style={{width: widthPercentageToDP('20%'), height: 24}} />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          marginBottom: 18,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Temperature
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: '°C', value: 'C'},
            {label: '°F', value: 'F'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Wind Speed
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: 'm/s', value: 'm/s'},
            {label: 'km/h', value: 'km/h'},
            {label: 'mph', value: 'mph'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Pressure
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: 'hPa', value: 'hPa'},
            {label: 'inHg', value: 'inHg'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Precipitation
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: 'mm', value: 'mm'},
            {label: 'in', value: 'in'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Distance
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: 'km', value: 'km'},
            {label: 'mi', value: 'mi'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}>
          Time format
        </Text>
        <SwitchSelector
          style={{marginVertical: 12, width: widthPercentageToDP('50%')}}
          initial={0}
          // onPress={value => setTemperatur(value)}
          textColor={'#000000'} //'#7a44cf'
          selectedColor={'#000000'}
          buttonColor={'#ffffff'}
          borderColor={'#D9D9D9'}
          backgroundColor={'#D9D9D9'}
          hasPadding
          options={[
            {label: '24-hour', value: '24-hour'},
            {label: '12-hour', value: '12-hour'},
          ]}
        />
      </View>
      <View
        style={{
          width: widthPercentageToDP('100%'),
          height: 2,
          backgroundColor: '#D9D9D9',
          opacity: 0.5,
        }}
      />
    </View>
  );
};

export default CuzUnit;

const styles = StyleSheet.create({});
