import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import IconGoback from 'react-native-vector-icons/Ionicons';
import IconGoRight from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const CuzUnit = props => {
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
          <Text style={{fontSize: 16, color: '#000000'}}>Settings</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000000', fontWeight: 'bold'}}>
          Units
        </Text>
        <View style={{width: widthPercentageToDP('20%'), height: 24}} />
      </View>

      <View>
        <View
          style={{
            width: widthPercentageToDP('100%'),
            height: 2,
            backgroundColor: '#D9D9D9',
          }}
        />
      </View>
    </View>
  );
};

export default CuzUnit;

const styles = StyleSheet.create({});
