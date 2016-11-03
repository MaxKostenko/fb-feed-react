/* global FB */
import React from 'react';
import Button from './ui-components/Button';


export default class AccountLoginButton extends React.Component {

	
	static propTypes = {
		setUser: React.PropTypes.func.isRequired,
		loading: React.PropTypes.bool
	};

    static defaultProps = {
		loading: false
	};

	state = {
		isLoading: false
	};

	componentWillMount() {
		this.setState({isLoading: this.props.loading});
	}

	componentWillReceiveProps(nextProps) {
		if( this.props !== nextProps ) {
			this.setState({isLoading: nextProps.loading});	
		}
	}

	handleClick() {
		this.setState({isLoading: true});
		FB.login((response) => {
				this.props.setUser(response);
			}, {scope: [
					'user_birthday',
					'user_posts',
					'email',
					//'user_hometown',
					'publish_actions',
					// 'user_likes',
					//'user_status',
					'user_about_me',
					// 'user_location',
					// 'user_tagged_places',
					 'user_photos',
					 'user_videos',
					//'user_education_history',
					// 'user_website',
					// 'user_friends',
					// 'user_relationship_details',
					//'user_work_history',
					// 'user_games_activity',
					//'user_relationships' 
				].join(',')});
	}

	render() {
		console.log('alb:render');
		return <Button actionClick={this.handleClick.bind(this)} loading={this.state.isLoading} decoration={['huge', 'primary']}>
			Get Started <i className="right arrow icon"></i>
		</Button>
	}
}