/* global FB */
import React from 'react';
import Button from '../components/Button';

export default class AccountLogoutButton extends React.Component {

	state = {
		isLoading: false
	};

	actionClick() {
		this.setState({isLoading: true});
		FB.logout((response) => {
			this.props.handleLogOut(response);
		});
	}
	
	render() {
		return <Button loading={this.state.isLoading} actionClick={this.actionClick.bind(this)}>Log out</Button>
	}
}