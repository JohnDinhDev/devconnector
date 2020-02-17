import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => (
	<nav className='navbar bg-dark'>
		<h1>
			<Link to='/'>
				<i className='fas fa-code' style={{ marginRight: "10px" }}></i>
				DevConnector
			</Link>
		</h1>
		<ul>
			<li>
				<Link to='/profiles'>Developers</Link>
			</li>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</ul>
	</nav>
);
