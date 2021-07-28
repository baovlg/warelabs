import { Route } from 'react-router-dom';

import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';

const AppDefault = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) => (
        <div id="content--main">
          <Header />
          <Sidebar />
          <Component {...props} {...rest} />
        </div>
      )}
    />
  );
};

export default AppDefault;
