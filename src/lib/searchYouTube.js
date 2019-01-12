var searchYouTube = (options, callback, errorCB = null) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: true
    },

    contentType: 'application/json',
    success: function(data){
      callback(data.items);
    },
    error: errorCB || function(error) {
      console.error('failed to fetch youtube search results', error);
    }
  });
};

export default searchYouTube;
