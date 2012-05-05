var http = require('http');
var url = require('url');

function start(route, handle){
	function onRequest(request, response){
		var path = url.parse(request.url).path,
			 postedData = '';

		request.setEncoding('utf8');

		request.addListener('data', function(chunk) {
          postedData += chunk;
		});
		
		request.addListener('end', function() {
      	route(handle, pathname, request, response, postedData);
    	});
	}

	http.createServer(onRequest).listen(8080);
}

exports.start = start;

