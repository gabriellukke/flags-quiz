import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppProvider from './context';
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
