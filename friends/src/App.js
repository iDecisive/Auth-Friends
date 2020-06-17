import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Route exact path="/">
					<h1>Not logged in.</h1>

					<Login />
				</Route>

				{/* <Route path="/dashboard">
					<h1>Dashboard</h1>
				</Route> */}

        <PrivateRoute exact path='/dashboard' component={Login}/>

			</div>
		</BrowserRouter>
	);
}

export default App;
