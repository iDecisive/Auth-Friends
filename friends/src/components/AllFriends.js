import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function AllFriends(props) {
	//State

	let [friends, setFriends] = useState([{}]);

	let [formInput, setFormInput] = useState({
		name: '',
		age: '',
		email: '',
	});

	//Functions

	let changeInput = (event) => {
		setFormInput({
			...formInput,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		axiosWithAuth()
			.get('/api/friends')
			.then((response) => {
				console.log(response.data);

				setFriends(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const addFriend = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post('/api/friends', formInput)
			.then((response) => {
				console.log(response);
				setFriends(response.data);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<form onSubmit={addFriend}>
				<label>
					Name
					<input
						type="text"
						onChange={changeInput}
						name="name"
						value={formInput.name}
					></input>
				</label>

				<label>
					Age
					<input
						type="text"
						onChange={changeInput}
						name="age"
						value={formInput.age}
					></input>
				</label>

				<label>
					Email
					<input
						type="text"
						onChange={changeInput}
						name="email"
						value={formInput.email}
					></input>
				</label>

				<button>Add</button>
			</form>

			{friends.map((item) => {
				return (
					<div>
						<p>{item.name}</p>
						<p>{item.age}</p>
						<p>{item.email}</p>
					</div>
				);
			})}
		</div>
	);
}

export default AllFriends;
