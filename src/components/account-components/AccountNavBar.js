import React from 'react';
import ProfilePicture from '../ui-components/ProfilePicture';
import './AccountNavBar.css';
import Logout from './AccountLogoutButton';
import UserStore from '../../stores/UserStore';

const SHOW_AFTER_TOP_OFFSET = 200;

export default class AccountNavBar extends React.Component {
	
	isHidden = true;

	componentWillMount() {
		this.userId = UserStore.id;
		this.scrollEvent = this.handleScroll.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.scrollEvent);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollEvent);
	}

	handleScroll(event) {
		
		if( window.pageYOffset > SHOW_AFTER_TOP_OFFSET ) {
			if( this.isHidden ) {
				this.refs.root.classList.remove('hidden');
			}
			this.isHidden = false;
		} else {
			if( !this.isHidden ) {
				this.refs.root.classList.add('hidden');
			}
			this.isHidden = true;
		}
	}

	render() {
		return <nav ref="root" className="ui top fixed hidden menu">
			<div className="ui text container">
				<div className="left menu">
					<div className="item">
						<ProfilePicture user={this.userId} size="tiny" /> 
					</div>
				</div>
				<div className="right menu">
					<div className="item">
						<Logout />
					</div>
				</div>
			</div>
		</nav>
	}
}