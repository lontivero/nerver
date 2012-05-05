function route(path, handle, response, request, postedData){
	var handler = handle[path];
	if(typeof(handler)==='function'){
		handle[path](response, request, postedData);
	}else{
		response.writeHead(404, {"Content-Type": "text/html"});
    	response.write("404 Not found");
    	response.end();
	}
}


exports.route = route;
