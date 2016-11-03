import AppDispatcher from '../dispatcher/AppDispatcher';
import FBAPIConstants from '../constants/FBAPIConstants';

const ActionTypes = FBAPIConstants.ActionTypes;

export default {

	userLogin: function() {
		AppDispatcher.dispatch({
			type: ActionTypes.LOGIN,
		});
	}

};