import AppDispatcher from '../dispatcher/AppDispatcher';
import fbAPI from '../libs/Facebook';
import {
    userActions as ACTIONS,
    userStatuses as STATUSES
}
from '../constants/User';

function setUser(response) {
	console.log(response);
    AppDispatcher.dispatch({
        actionType: ACTIONS.SET_USER,
        user: response
    });
}

function setLoading() {
    AppDispatcher.dispatch({
        actionType: ACTIONS.CHANGE_STATUS,
        status: STATUSES.LOADING
    });
}

const UserActions = {

    init: function() {
        setLoading();
        fbAPI.init(setUser);
    },

    login: function() {
        setLoading();
        fbAPI.login(setUser);
    },

    logout: function() {
        setLoading();
        fbAPI.logout(setUser);
    }

};
export default UserActions;