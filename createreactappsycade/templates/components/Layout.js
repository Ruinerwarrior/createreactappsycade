module.exports = (conditions) =>  {
  let hasRouting = conditions.indexOf('routes') >= 0 ? true : false;
  return(
`import * as React from 'react';
import Home from '../../pages/Home';
${hasRouting ? `
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
` : ``}
const Layout: React.SFC = () => {
  return (
    //header component here
    
    ${hasRouting ? `
    <Router>
      {/* main content components dependend on routes */}
      <>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </>
    </Router>` : 
   `<Home/>`}

    //footer component here
  );
}

export default Layout;
`
  );
}