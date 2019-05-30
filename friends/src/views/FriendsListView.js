import React from 'react';
import { connect } from 'react-redux';
import Friend from '../components/FriendsList';
import FriendsList from '../components/FriendsList';
import { getFriends } from '../actions'

class FriendsListView extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div className='friends'>
                {this.props.friends.map(friend => (
                    <div className='friend' key={friend.id}>
                        <h2>Name: {friend.name}</h2>
                        <h3>Age: {friend.age}</h3>
                        <h3>Email: {friend.email}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        friends: state.friendsReducer.friends,
        error: state.friendsReducer.error,
        fetchingFriends: state.friendsReducer.fetchingFriends
    }
}

export default connect(
    mapStateToProps,
    {getFriends}
)(FriendsListView)