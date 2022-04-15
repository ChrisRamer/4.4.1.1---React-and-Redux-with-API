import React from 'react';
import Header from './Header';
import BlackCard from './BlackCard';
import WhiteCards from './WhiteCards';
import Footer from './Footer';

function App() {
	return (
		<React.Fragment>
			<Header />
			<BlackCard />
			<WhiteCards />
			<Footer />
		</React.Fragment>
	);
}

export default App;