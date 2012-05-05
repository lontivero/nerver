
function getProducts(response){
	var products = [{
		id: 4, name: "Bsol", watermark: "",
		versions: [{
			id: 5, version: "1.0.0.0"
		}]
	}, {
		id: 5, name: "Dar", watermark: "",
		versions: [{
			id: 3, version: "1.0.0.0"
		}]
	}, {
		id: 7, name: "eCommerce", watermark: "",
		versions: [{
			id: 7, version: "1.0.0.0"
		}]
	}, {
		id: 3, name: "Eurocodes", watermark: "",
		versions: [{
			id: 4, version: "1.0.0.0"
		}]
	}];
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write(JSON.stringify(products));
	response.end();}

function getPlugins(response) {
	var plugins = [{
		pluginName:"Customer Service Desk",
		pluginMetadata:"/ManageSubscriptions",
		controller:"App.plugin.subscriptions.controller.Subscription"
	}];
	response.writeHead(200, {'Content-Type': 'application/json'});
	response.write(JSON.stringify(plugins));
	response.end();
}

exports.getPlugins = getPlugins;
exports.getProducts= getProducts;

