/* global FB */
import React from 'react';
import Button from './ui-components/Button';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import {
    userStatuses as STATUSES
} from '../constants/User.js';

export default class AccountLoginButton extends React.Component {
	
	state = {
		fbStatus: UserStore.getStatus()
	};

	componentDidMount() {
        this._onChangeBinded = ( () => this.setState({
            fbStatus: UserStore.getStatus()
        }) );
		UserStore.addStatusChangeListener(this._onChangeBinded);
    }

    componentWillUnmount() {
        UserStore.removeStatusChangeListener(this._onChangeBinded);
    }

	handleClick() {
		UserActions.login();
	}
	
	get isLoading() {
        return this.state.fbStatus === STATUSES.LOADING;
    }

	render() {
		console.log('alb:render');
		return <Button actionClick={this.handleClick.bind(this)} loading={this.isLoading} decoration={['huge', 'primary']}>
			Get Started <i className="right arrow icon"></i>
		</Button>
	}
}