import React from 'react';
import './UserCard.css';

export default function UserCard() {

    return (
        <div className='UserCard'>
            <img src="https://robohash.org/10" alt="" height='100' width='100' />
            <div>Name: First Last</div>
            <button>Edit Profile</button>
        </div>
    )
}