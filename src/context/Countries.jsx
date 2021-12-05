import { createContext, useEffect, useState } from 'react';
import { getAllCountries } from '../services';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(async () => {
    const countries = await getAllCountries();
    setAllCountries(countries);
  }, [])

  const state = {
    allCountries,
  }

  return (
    <CountriesContext.Provider value={state}>{children}</CountriesContext.Provider>
  )
}
