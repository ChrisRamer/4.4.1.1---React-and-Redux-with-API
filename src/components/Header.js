import React from "react";
import logoImg from './../img/logo.png';

function Header() {
	return (
		<React.Fragment>
			<img src={logoImg} alt="Cards Against Humanity logo" />
		</React.Fragment>
	);
}

export default Header;