import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import SwitchSelector from 'react-native-switch-selector';

const CuzUnit = props => {
  return (
    <View style={styles.containerCuzUnit}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.containerGoBack}>
          <IconGoback
            style={{marginRight: 8}}
            name="chevron-back"
            size={22}
            color="#000000"
          />
          <Text style={styles.textSetting}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.textCusUnit}>Units</Text>
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

      <View style={styles.containerData}>
        <Text style={styles.textData}>Temperature</Text>
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
      <View style={styles.containerData}>
        <Text style={styles.textData}>Wind Speed</Text>
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
      <View style={styles.containerData}>
        <Text style={styles.textData}>Pressure</Text>
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
      <View style={styles.containerData}>
        <Text style={styles.textData}>Precipitation</Text>
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
      <View style={styles.containerData}>
        <Text style={styles.textData}>Distance</Text>
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
      <View style={styles.containerData}>
        <Text style={styles.textData}>Time format</Text>
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

const styles = StyleSheet.create({
  containerCuzUnit: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  containerGoBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSetting: {
    fontSize: 16,
    color: '#000000',
  },
  textUnits: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  textData: {
    fontSize: 16,
    color: '#000000',
  },
});
