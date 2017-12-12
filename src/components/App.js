import React from 'react';
import ListFilteredVideos from './ListFilteredVideos.js';
import Search from './Search.js';
import NextPrevious from './NextPrevious.js';
import {youtubeApiServiceCall} from './../services/YouTubeGetData.js';
import '../css/bootstrap.min.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  posts: [],
	      filterText: 'HTML Tutorials',
	      nextPageToken:'',
	      prevPageToken:'',
	      pageToken:''
	    }
	};
	tokenUpdate(token) {
		youtubeApiServiceCall(this.state.filterText, token).then((obj) => {
			this.setState({
				'posts':obj.posts,
				'nextPageToken':obj.nextPageToken,
				'prevPageToken':obj.prevPageToken
			});
		});
	};
	filterUpdate(value) {
		this.setState({
			filterText: value
		});
		youtubeApiServiceCall(this.state.filterText).then((obj) => {
			this.setState({
				'posts':obj.posts,
				'nextPageToken':obj.nextPageToken,
				'prevPageToken':obj.prevPageToken
			});
		});
	};
	componentDidMount() {
		youtubeApiServiceCall(this.state.filterText).then((obj) => {
			this.setState({
				'posts':obj.posts,
				'nextPageToken':obj.nextPageToken,
				'prevPageToken':obj.prevPageToken
			});
		});
	}
	render() {
		return (<div>
			<Search filterVal={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)}></Search>
			<NextPrevious nextPageToken={this.state.nextPageToken} prevPageToken={this.state.prevPageToken} tokenUpdate={this.tokenUpdate.bind(this)}></NextPrevious>
			<ListFilteredVideos posts={this.state.posts}></ListFilteredVideos>
		</div>);
	};
};
