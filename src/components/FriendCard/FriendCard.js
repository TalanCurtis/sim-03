import React from 'react';
// import './UserCard.css';

export default function FriendCard(props) {

    return (
        <div className='FriendCard'>
            <img src={props.user.img} alt="" height='100' width='100' />
            <h2>Name: {props.user.user_name}</h2>
            <h3>Age: {props.user.age}</h3>
            <h3>Eyes: {props.user.eye_color}</h3>
            <h3>Hair: {props.user.hair_color}</h3>
        </div>
    )
}