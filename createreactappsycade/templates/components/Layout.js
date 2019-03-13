module.exports = (conditions) =>  {
  let hasRouting = conditions.indexOf('routes') >= 0 ? true : false;
  return(
`import * as React from 'react';
import Home from '../../pages/Home';
${hasRouting ? `
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
` : ``}
const Layout: React.FunctionComponent = () => {
  return (  
    ${hasRouting ? `
    <Router>
      <>
        {/* header component here */}
        {/* main content components dependendcd creat on routes */}
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
        {/* footer component here */}
      </>
    </Router>` : 
   `<Home/>`}
  );
}

export default Layout;
`
  );
}