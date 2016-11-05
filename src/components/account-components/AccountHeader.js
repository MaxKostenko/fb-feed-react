/* global FB */
import React from 'react';
import ProfilePicture from '../ui-components/ProfilePicture';
import Greeting from './AccountGreeting'
import FriendsCount from './AccountFriendsCount'
import BirthDay from './AccountBirthDay'
import Logout from './AccountLogoutButton';
import UserStore from '../../stores/UserStore';

export default class AccountHeader extends React.Component {

	state = {
        profile: false
    };
	
	static propTypes = {
		userId: React.PropTypes.string.isRequired
	}
	
	componentDidMount() {
		FB.api('/me', 'GET', {fields: "id,name,birthday,context,email,gender"}, (response) => {
			this.setState({profile: response});
		});	
	}
	
	get loadingClassNames() {
		return `ui${( this.state.profile ? '' : ' active' )} inverted dimmer`;
	}
	
	render() { console.log('AccountHeader Rendered');
		return <header className="ui center aligned">
			<div className="ui stackable grid">
				<div className="six wide column">
					<ProfilePicture user={UserStore.id} size="medium" /> 
				</div>
				<div className="ten wide column">
					<div className={this.loadingClassNames}>
						<div className="ui text loader">Loading</div>
					</div>
					<Greeting name={this.state.profile.name} />
					<FriendsCount context={this.state.profile.context} />
					<BirthDay birthday={this.state.profile.birthday} />
					<div className="ui clearing">
						<Logout />
					</div>
				</div>
			</div>
		</header>
	}
}