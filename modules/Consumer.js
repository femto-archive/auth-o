const ConsumerObject = require("../models/OAuthConsumer")

class Consumer = {
	constructor() {}
	createConsumer(parameters) {
		consumerOptions = {
			name: parameters.name, 
			consumer_secret: parameters.secret, 
			redirect_uri: parameters.uri, 
			realm_id: parameters.realm
		}
		ConsumerObject.create(consumerOptions, function(err, consumer) {

		}) 
	} 
	removeConsumer(id) {
		//ConsumerObject.remove
	}
}

module.exports = Consumer 
