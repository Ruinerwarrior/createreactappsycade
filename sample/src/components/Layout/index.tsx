import * as React from 'react';
import Home from '../../pages/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

const Layout: React.SFC = () => {
  return (
    //header component here
    
    
    <Router>
      {/* main content components dependend on routes */}
      <>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </>
    </Router>

    //footer component here
  );
}

export default Layout;
