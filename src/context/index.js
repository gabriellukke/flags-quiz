import { CountriesProvider } from './Countries'

const AppProvider = ({ children }) => {
  return (
    <CountriesProvider>
      {children}
    </CountriesProvider>
  );
};

export default AppProvider;
