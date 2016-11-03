/* global FB */
import React from 'react';
import './LoginPage.css';
import Login from './AccountLoginButton';

export default class LoginPage extends React.Component {

	static propTypes = {
        setUser: React.PropTypes.func.isRequired,
        status: React.PropTypes.string
    };

	render() {
		console.log('lp:render');
		return <div className="ui middle aligned center aligned grid LoginPage">
			<div className="column">
				<div className="ui vertical masthead center aligned segment">
					<div className="ui text container">
						<h1 className="ui inverted header">
							Like Facebook, but not
						</h1>
						<h2 className="ui inverted header">Do whatever you want when you want to.</h2>
						<Login loading={(this.props.status === undefined)} setUser={this.props.setUser}/>							
					</div>
				</div>
			</div>
		</div>;
	}
}