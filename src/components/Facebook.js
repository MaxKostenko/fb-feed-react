/* global FB */
import React from 'react';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';
import './Facebook.css';
import {
    userStatuses as STATUSES
} from '../constants/User.js';

import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';

export default class Facebook extends React.Component {

	state = {
		fbStatus: UserStore.getStatus()
	};
	
	componentDidMount() {
        this._onChangeBinded = ( () => this.setState({
            fbStatus: UserStore.getStatus()
        }) );
        
		UserStore.addStatusChangeListener(this._onChangeBinded);
        UserActions.init();
    }

    componentWillUnmount() {
        UserStore.removeStatusChangeListener(this._onChangeBinded);
    }
	
	get isConnected() {
        return this.state.fbStatus === STATUSES.CONNECTED;
    }

	render() {
		console.log('fb:render');
		return this.isConnected ?  
			<AccountPage /> :
			<LoginPage />;
	}
}