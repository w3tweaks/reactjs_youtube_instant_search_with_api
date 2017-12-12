import React from 'react';
import VideoListLayout from './VideoListLayout.js';

export default class ListFilteredVideos extends React.Component{
	render(){
		const {posts} = this.props;
	    return (<div className="panel-body">
			{posts.map((post, i) =>
				<VideoListLayout key={i} posts={post}> </VideoListLayout>
			)}
		</div>);
	};
};
