/* global FB */
import React from 'react';
import Button from '../ui-components/Button';
import UserActions from '../../actions/UserActions';

export default class AccountLogoutButton extends React.Component {

	state = {
		isLoading: false
	};

	actionClick() {
		this.setState({isLoading: true});
		UserActions.logout();
	}
	
	render() {
		return <Button loading={this.state.isLoading} actionClick={this.actionClick.bind(this)}>Log out</Button>
	}
}