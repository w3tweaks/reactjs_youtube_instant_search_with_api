export function youtubeApiServiceCall(filterText, pageToken){
	let pageTokenVal = '';
  if (pageToken) {
    pageTokenVal = "&pageToken="+pageToken;
  }

	const val = filterText;
	const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBahF7YmvpZiMBziQXy21Uhe44URp2yPHE&q="+val+"&part=snippet&maxResults=12"+pageTokenVal;

    return new Promise((resolve, reject) => {
    	fetch(url, {
		    method: 'get',
		    headers: {
		        'Accept': 'application/json'
		    }
		}).then(function(res) {
			return res.json();
		}).then(function (data) {
	        const posts = data.items.map(obj => obj);
	        const{nextPageToken,prevPageToken} = data;
	        const objects = {
	        	'posts':posts,
	        	'nextPageToken':nextPageToken,
	        	'prevPageToken':prevPageToken
	        };
	    	resolve(objects);
	    });
    });
};
