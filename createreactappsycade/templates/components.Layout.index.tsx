import * as React from 'react';
import Home from '../../pages/Home';
import NavBar from '../NavBar';

const Layout: React.FunctionComponent = () => {
	return (
		<>
			<NavBar />
			<Home />
			{/* footer component here */}
		</>
	);
}

export default Layout;
