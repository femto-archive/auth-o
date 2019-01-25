const ConsumerModel = require("../models/OAuthConsumer")

class Consumer {
	constructor() {}

	getConsumer(realm_id, consumer_id, req, res) {
		//ConsumerModel.findOne
		res.json({r: realm_id, c: consumer_id})
	}
	createConsumer(realm_id, consumer_id, parameters, req, res) {
		/*
		consumerOptions = {
			name: parameters.name, 
			consumer_secret: parameters.secret, 
			redirect_uri: parameters.uri, 
			realm_id: parameters.realm
		}
		ConsumerObject.create(consumerOptions, function(err, consumer) {

		}) 
		*/
	} 
	removeConsumer(realm_id, consumer_id, req, res) {
		//ConsumerObject.remove
	}
}

module.exports = Consumer 
