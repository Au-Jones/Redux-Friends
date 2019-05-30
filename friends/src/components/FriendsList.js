import React from 'react';
import Friend from './Friends'

const FriendsList = props => {
    console.log(props);
    return(
        <ul>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
        </ul>
    )
}

export default FriendsList