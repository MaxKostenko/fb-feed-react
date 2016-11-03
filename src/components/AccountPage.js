/* global FB */
import React from 'react';
import Header from './account-components/AccountHeader';
import NavBar from './account-components/AccountNavBar';
import Feed from './feed-components/AccountFeed';
import './AccountPage.css';

export default class AccountPage extends React.Component {
	
	static propTypes = {
        userId: React.PropTypes.string.isRequired,
    };
	
	componentDidMount() {
		/*
		FB.api('/me', 'GET', {fields:"id,name,birthday,cover,context,age_range,email,first_name,gender,last_name,link,education,relationship_status,sports,work"},(response) => {
			//this.setState({userId: response.id});
			//console.log(response);
		});

		FB.api('/me/feed', 'GET', {fields:"picture"}, (response) => {
			//console.log(response);
		});
		FB.api('/me/events', 'GET', {fields:"picture"}, (response) => {
			//console.log(response);
		});
		/*
		FB.api('/10211130749410494_10210904130425161', 'GET', {fields:"picture"}, (response) => {
			console.log(response);
		})
		*/
	}
	
	handleLogOut(response) {
		this.props.setUser(response);
		/*
		FB.logout((response) => {
			this.props.setUser(response);
		});
		*/
	}
	
	render() {
		return <div className="pusher">
			<NavBar handleLogOut={this.handleLogOut.bind(this)} userId={this.props.userId} />
			<Header handleLogOut={this.handleLogOut.bind(this)} userId={this.props.userId} />
			<Feed userId={this.props.userId} />
		</div>;
	}
}

/*

		<div>
			<div>Hello FB User</div>
			{(() => {
				if( this.state.userId ) {
					let url = `http://graph.facebook.com/${this.state.userId}/picture?width=250`;
					return <div><img role="presentation" src={url} /></div>
				}
				return '';
			})()}
			<button onClick={() => this.handleLogOut()}>Log Out</button>
		</div>;

*/