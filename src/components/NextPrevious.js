import React from 'react';

export default class NextPrevious extends React.Component{
	render(){
		var divStyle = {
		  	textAlign: 'center'
		};
		const { nextPageToken, prevPageToken, tokenUpdate} = this.props;
	    return (
	    	<div style={divStyle}>
			    <div className="btn-group">
				    {prevPageToken &&
					  <button type="button" id="pageTokenPrev" className="btn btn-default" onClick={() => {
					   tokenUpdate(prevPageToken)
					  }}>Prev</button>
					}
					{nextPageToken &&
						<button type="button" id="pageTokenNext" className="btn btn-default" onClick={() => {
							tokenUpdate(nextPageToken)
						}}>Next</button>
					}
			    </div>
			</div>
		);
	};
};
