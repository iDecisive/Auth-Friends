import React, { useState } from 'react';

function Login(props) {

    let [formInput, setFormInput] = useState({

        username: '',
        password: ''

    });

    let onChange = event => {

        setFormInput({

            ...formInput,
            [event.target.name]: event.target.value

        })

    }

    return (

        <form>

            <label>
                Username

                <input type='text' onChange={onChange} name='username'></input>

            </label>

            <label>
                Password

                <input type='password' onChange={onChange} name='password'></input>

            </label>

            <button>Login</button>

        </form>
        
    );
}

export default Login;