//https://medium.com/@softwarecf/flux-stores-and-es6-9b453dbf9db#.792cl6xj9
import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import { 
    userActions as ACTIONS,
    userStatuses as STATUSES,
    userEvents as EVENTS
} from '../constants/User';

let fbUser = {};

class Store extends EventEmitter {

    emitStatusChange() {
        this.emit(EVENTS.STATUS_CHANGE);
    }
	
	get id() {
		return fbUser.status === STATUSES.CONNECTED ? fbUser.authResponse.userID : null;
	}
	
    getStatus() {
        return fbUser.status ? fbUser.status : STATUSES.UNKNOWN;
    }

    /**
     * @param {function} callback
     */
    addStatusChangeListener(callback) {
        this.on(EVENTS.STATUS_CHANGE, callback);
    }

    /**
     * @param {function} callback
     */
    removeStatusChangeListener(callback) {
        this.removeListener(EVENTS.STATUS_CHANGE, callback);
    }

}

let appStoreInstance = new Store();

function updateUser(user) {
    let isStatusChanged = fbUser.status !== user.status;
    fbUser = user;
    if (isStatusChanged) {
        appStoreInstance.emitStatusChange();
    }

}

function updateStatus(status) {
    if (fbUser.status !== status) {
        fbUser.status = status;
        appStoreInstance.emitStatusChange();
    }

}

appStoreInstance.dispatchToken = AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case ACTIONS.CHANGE_STATUS:
            updateStatus(action.status);
            break;
        case ACTIONS.SET_USER:
            updateUser(action.user);
            break;
        default:
    }

});


export default appStoreInstance;