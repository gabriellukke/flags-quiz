import { createContext, useState } from 'react';

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const state = {
    countries,
    setCountries,
  }

  return (
    <CountriesContext.Provider value={state}>{children}</CountriesContext.Provider>
  )
}
