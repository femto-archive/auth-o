const ConsumerModel = require("../models/OAuthConsumer")

class Consumer {
	constructor() {}

	getConsumer(realm_id, consumer_id, callback) {
		ConsumerModel.findOne({_id: consumer_id, realm_id: realm_id}, function(err, consumer) {
			if (err) {
				callback({
					error: {
						number: 1, 
						message: "Error", 
						err: err
					}, 
					data: {}
				})
			}
			else if (!consumer) {
				callback({
					error: {
						number: 2, 
						message: "No Consumer", 
						err: null
					}, 
					data: {}, 
					initial: {
						realm_id: realm_id, 
						consumer_id: consumer_id
					}
				})
			}
			else {
				callback({
					error: {
						number: 0, 
						message: "No Error", 
						err: null
					}, 
					data: {
						consumer: consumer
					}, 
					initial: {
						realm_id: realm_id, 
						consumer_id: consumer_id
					}
				})
			}
		})
	}
	createConsumer(realm_id, consumer_id, parameters, callback) {
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
	removeConsumer(realm_id, consumer_id, callback) {
		//ConsumerObject.remove
	}
}

module.exports = Consumer 


/*
{
  error: { code: errNumber, message: humanReadable },
  data: {} // arbitrary data result format.
}
*/
