import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import IconGoback from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import WindSlider from '../../Component/WindSlider';
import TempSlider from '../../Component/TempSlider';

const DifWeather = props => {
  const [skySelected, setSkySelected] = useState(0);
  const [dataSourceSelected, setDataSourceSelected] = useState(0);

  const ListSkys = [
    {
      name: 'clear sky',
      img: 'https://openweathermap.org/img/wn/01d.png',
    },
    {
      name: 'few clouds',
      img: 'https://openweathermap.org/img/wn/02d.png',
    },
    {
      name: 'overcast clouds',
      img: 'https://openweathermap.org/img/wn/04d.png',
    },
    {
      name: 'drizzle',
      img: 'https://openweathermap.org/img/wn/09d.png',
    },
    {
      name: 'rain',
      img: 'https://openweathermap.org/img/wn/10d.png',
    },
    {
      name: 'shower rain',
      img: 'https://openweathermap.org/img/wn/09d.png',
    },
    {
      name: 'tunderstrom',
      img: 'https://openweathermap.org/img/wn/11d.png',
    },
    {
      name: 'snow',
      img: 'https://openweathermap.org/img/wn/13d.png',
    },
    {
      name: 'mist',
      img: 'https://openweathermap.org/img/wn/50d.png',
    },
  ];

  const DataSource = [
    'Personal feelings',
    'Own weather station or devices',
    'Local weather provider',
    'Global weather provider',
    'Other',
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => setSkySelected(index)}
        key={index}
        style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          backgroundColor: skySelected === index ? '#ffffff' : '#F0F0F0',
          width: widthPercentageToDP('32%'),
          borderRadius: 8,
          alignItems: 'center',
        }}>
        <FastImage
          style={{width: 43, height: 43}}
          source={{
            uri: item.img,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <IconGoback
            style={{marginRight: 8}}
            name="chevron-back"
            size={22}
            color="#000000"
          />
          <Text style={styles.textSetting}>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.textSetting}>Different Weather?</Text>
        <View style={{width: widthPercentageToDP('20%'), height: 24}} />
      </View>
      <View style={styles.containerSkys}>
        <Text style={styles.textTellSkyLike}>What is the sky like?</Text>
        <Text>{ListSkys[skySelected]['name']}</Text>
      </View>

      <View style={styles.containerListSkys}>
        <FlatList
          data={ListSkys}
          numColumns={3}
          renderItem={renderItem}
          keyExtractor={item => item.alt}
        />
      </View>

      <TempSlider />
      <WindSlider />
      {/* email */}
      <View style={styles.containerTextInput}>
        <TextInput
          keyboardType="email-address"
          placeholder="Email (Optional)"
        />
      </View>

      {/* Message */}
      <View style={styles.containerMessage}>
        <TextInput
          multiline
          keyboardType="default"
          placeholder="Message (Optional)"
        />
      </View>

      <View style={styles.containerDataSource}>
        <View style={styles.containerTextData}>
          <Text style={styles.textDataSource}>Data Source:</Text>
          <Text>{DataSource[dataSourceSelected]}</Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            marginVertical: 12,
            width: widthPercentageToDP('100%'),
            height: 2,
            backgroundColor: '#D9D9D9',
          }}
        />
        {DataSource?.map((v, i) => {
          return (
            <TouchableOpacity
              onPress={() => setDataSourceSelected(i)}
              key={i}
              style={styles.containerList}>
              <CheckBox
                uncheckedCheckBoxColor={'#D9D9D9'}
                checkedCheckBoxColor={'#3EB489'}
                style={{flex: 1, borderRadius: 8}}
                onClick={() => setDataSourceSelected(i)}
                value={dataSourceSelected === i ? true : false}
                isChecked={dataSourceSelected === i ? true : false}
                rightTextView={
                  <Text
                    style={{
                      paddingLeft: 8,
                      fontSize: 16,
                      color: '#000000',
                      fontWeight: 'bold',
                    }}>
                    {v}
                  </Text>
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.containerButton}>
        <Text style={styles.textButton}>Send</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DifWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  textSetting: {
    fontSize: 16,
    color: '#000000',
  },
  textDifferentWeather: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerSkys: {
    padding: 12,
    paddingTop: 23,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTellSkyLike: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerListSkys: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  containerTextInput: {
    borderRadius: 12,
    padding: 4,
    backgroundColor: '#F0F0F0',
    margin: 12,
  },
  containerMessage: {
    borderRadius: 12,
    padding: 4,
    backgroundColor: '#F0F0F0',
    margin: 12,
    height: heightPercentageToDP('20%'),
  },
  containerDataSource: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  containerTextData: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textDataSource: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  containerList: {
    padding: 8,
    flexDirection: 'row',
  },
  containerButton: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    margin: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  textButton: {
    paddingLeft: 8,
    fontSize: 16,
    color: '#4169E1',
  },
});
