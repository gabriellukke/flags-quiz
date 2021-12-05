import { Routes as Switch, Route } from 'react-router-dom';
import { Home, Library } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home/>} />
      <Route path="/library" element={<Library/>} />
    </Switch>
  );
};

export default Routes;
