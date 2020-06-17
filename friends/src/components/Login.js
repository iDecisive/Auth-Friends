import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

function Login(props) {
	//State

	let [formInput, setFormInput] = useState({
		username: '',
		password: '',
	});

	let history = useHistory();

	//Functions

	let changeInput = (event) => {
		setFormInput({
			...formInput,
			[event.target.name]: event.target.value,
		});
	};

	let login = (event) => {
		event.preventDefault();

		axiosWithAuth()
			.post('/api/login', formInput)
			.then((response) => {
				console.log(response.data);

				window.localStorage.setItem('token', response.data.payload);

				history.push('/dashboard');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<form onSubmit={login}>
			<label>
				Username
				<input
					type="text"
					onChange={changeInput}
					name="username"
					value={formInput.username}
				></input>
			</label>

			<label>
				Password
				<input
					type="password"
					onChange={changeInput}
					name="password"
					value={formInput.password}
				></input>
			</label>

			<button>Login</button>
		</form>
	);
}

export default Login;
