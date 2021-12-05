import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllCountries = async () => {
  try {
    const { data } = await api.get('all');
    return data;
  } catch (err) {
    return err.response;
  }
};
