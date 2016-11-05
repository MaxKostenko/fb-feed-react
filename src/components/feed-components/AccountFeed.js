/* global FB */
import React from 'react';
import FeedItem from './FeedItem';
import UserStore from '../../stores/UserStore';

export default class AccountFeed extends React.Component {

	state = {
		feed: []
	}

	componentDidMount() {
		FB.api(`/${UserStore.id}/posts`, 'GET', {fields:("application,attachments,caption,created_time,description," +
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