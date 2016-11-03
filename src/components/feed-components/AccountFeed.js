/* global FB */
import React from 'react';
import FeedItem from './FeedItem';

export default class AccountFeed extends React.Component {

	state = {
		feed: []
	}

	static propTypes = {
		userId: React.PropTypes.string.isRequired,
	};

	componentDidMount() {
		FB.api(`/${this.props.userId}/posts`, 'GET', {fields:("application,attachments,caption,created_time,description," +
						"from,icon,link,name,message,object_id,picture,place,source,shares,status_type,type")}, (response) => {
			console.log(response);
			this.setState({feed: response.data});
		});
	} 

	render() {
		if( !this.state.feed || !this.state.feed.length ) return null;
		return <div className="ui text container main">
			{this.state.feed.map((item) => <FeedItem key={item.id} item={item} />)}
		</div>
	}
}