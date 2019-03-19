import '../styles/index.css';
import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import logo from '../images/logo.png';
import Home from './pages/home';
import Table from './pages/table';

const App = () => (
	<Router>
		<React.Fragment>
			<header>
				<div className="brand">
					<img
						src={ logo }
						alt="logo"
					/>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink exact to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/table">Table Example</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<div className="container">
				<Route
					exact
					path="/"
					component={ Home }
				/>
				<Route
					path="/table"
					component={ Table }
				/>
			</div>
		</React.Fragment>
	</Router>
);

export default App;
