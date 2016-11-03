/* global FB */
import React from 'react';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';
import './Facebook.css';

export default class Facebook extends React.Component {

	state = {
		user: {}
	};
	
	setUserHandle(response) {
		this.setState({user: response});
	}


	shouldComponentUpdate(nextProps, nextState) {
		return nextState !== this.state;
	}


	componentDidMount() {

		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		window.fbAsyncInit = () => {
			FB.init({
				appId: '538415506349040',
				cookie: true,  // enable cookies to allow the server to access the session
				xfbml: false,  // parse social plugins on this page
				version: 'v2.3' // use graph api version 2.5
			});

			FB.getLoginStatus( (response) => {
				console.log('autostatus');
				//console.log(response);
				//response.status
				this.setUserHandle(response)
			});

		}
	}

	render() {
		console.log('fb:render');
		return this.state.user.status === 'connected' ?  
			<AccountPage userId={this.state.user.authResponse.userID} setUser={this.setUserHandle.bind(this)}/> :
			<LoginPage status={this.state.user.status} setUser={this.setUserHandle.bind(this)}/>;
	}
}