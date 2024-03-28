import axios from 'axios';
import Config from 'react-native-config';
import {baseApiURL} from '../../Config';

export const apiGetDataweatherHome = data => {
  console.log('dataNYAK', data);
  const options = {
    method: 'GET',
    url: `${baseApiURL}?q=${data?.country}&APPID=${Config.KEY_API}`,
  };

  return axios.request(options);
};
