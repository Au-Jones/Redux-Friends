import {
    FETCHING_FRIENDS,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
}
    from '../actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return { ...state, fetchingFriends: true };

        case FETCHING_SUCCESS:
            console.log(action.payload);
            return { ...state, fetchingFriends: false, friends: action.payload };

        case FETCHING_FAILURE:
            console.log(action.payload);
            return {
                ...state,
                fetchingFriends: false,
                error: true
            };

        default:
            return state;
    }
}