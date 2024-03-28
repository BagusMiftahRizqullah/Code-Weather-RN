import axios from 'axios';
import Config from 'react-native-config';
import {baseApiURL} from '../../Config';

export const apiGetDataweatherHome = data => {
  const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0bad2146f3184ebbfede5480ab2618e1',
  };

  return axios.request(options);
};
