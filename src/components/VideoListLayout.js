import React from 'react';

export default class ListFilteredVideos extends React.Component{
	render(){
		const {posts} = this.props;
		const url = 'https://www.youtube.com/watch?v='+posts.id.videoId,
			  imgUrl = posts.snippet.thumbnails.default.url,
			  title = posts.snippet.title,
			  channelTitle = posts.snippet.channelTitle,
			  channelUrl = 'https://www.youtube.com/channel/'+posts.snippet.channelId;

	    return (<div className="col-sm-4 col-lg-4 col-md-4">
	    <div className="well well-sm media">
	        <a className="thumbnail pull-left" target="_block" href={url}><img alt={title} src={imgUrl} width="120" height="90" /></a>
	        <div className="media-body">
	            <a target="_block" href={url}>{title}</a>
	            <p>By <a target="_block" href={channelUrl}><span className="label label-info">{channelTitle}</span></a></p>
	        </div>
	    </div>
	</div>);
	};
};
