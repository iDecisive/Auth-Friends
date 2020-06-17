import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function AllFriends(props) {

    let [friends, setFriends] = useState([{}]);

    useEffect(() => {

        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
    
            console.log(response.data);

            setFriends(response.data);
    
        })
        .catch(error => console.log(error))

    },[]);

    return (
        <div>
            
        {friends.map(item => {

            return (
                <div>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.email}</p> 
                </div>
)})}

        </div>
    );
}

export default AllFriends;