import axios from 'axios';
import Config from 'react-native-config';
import {baseApiURL} from '../../Config';

export const apiGetDataWeatherCountry = data => {
  return axios({
    method: 'GET',
    url: baseApiURL + `q=London,uk&APPID=${Config.KEY_API}`,
    data,
  });
};
