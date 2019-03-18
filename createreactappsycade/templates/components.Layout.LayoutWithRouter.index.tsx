import * as React from 'react';
import Home from '../../pages/Home';
import NavBar from '../NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

const Layout: React.FunctionComponent = () => {
	return (
		<Router>
			<>
				{/* main content components dependendcd creat on routes */}
				<NavBar/>
				<Switch>
					<Route exact={true} path="/" component={Home} />
				</Switch>
				{/* footer component here */}
			</>
		</Router>
	);
}

export default Layout;
