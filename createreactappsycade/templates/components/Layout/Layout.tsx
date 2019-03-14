import * as React from 'react';
import Home from '../../pages/Home';
import Header from '../Header';

const Layout: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<Home />
			{/* footer component here */}
		</>
	);
}

export default Layout;
