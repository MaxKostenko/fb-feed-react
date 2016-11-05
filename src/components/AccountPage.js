/* global FB */
import React from 'react';
import Header from './account-components/AccountHeader';
import NavBar from './account-components/AccountNavBar';
import Feed from './feed-components/AccountFeed';
import './AccountPage.css';

export default class AccountPage extends React.Component {
	
	render() {
		return <div className="pusher">
			<NavBar />
			<Header />
			<Feed />
		</div>;
	}
}