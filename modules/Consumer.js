const ConsumerModel = require("../models/OAuthConsumer")
const RealmModel = require("../models/OAuthRealms")

class Consumer {
	constructor() {}

	getConsumers(realm_id, callback) {
		ConsumerModel.find({}, function(err, consumers) {
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
						message: "No Consumers", 
						err: null
					}, 
					data: {}
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
						consumer: consumers
					}
				})
			}
		})
	}
	createConsumer(realm_id, parameters, callback) {
		consumerOptions = {
			name: parameters.name, 
			consumer_secret: parameters.secret, 
			redirect_uri: parameters.uri, 
			realm_id: parameters.realm
		}
		RealmModel.findById(realm_id, function(err, realm) {
			if (err) {
				callback({
					error: {
						number: 3, 
						message: "Realm Error", 
						err: err
					}, 
					data: {}
				})
			}
			else if (!realm) {
				callback({
					error: {
						number: 4, 
						message: "No Realm", 
						err: null
					}, 
					data: {}
				})
			}
			else {
				ConsumerObject.create(consumerOptions, function(err, consumer) {
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
								message: "No Consumer Created", 
								err: null
							}, 
							data: {}
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
								consumer_id: consumer._id, 
								consumer: consumer
							}
						})
					}
				}) 
			}
		})
	} 
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
					data: {}
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
					}
				})
			}
		})
	}
	updateConsumer(realm_id, consumer_id, parameters, callback) {

		callback()
	}
	removeConsumer(realm_id, consumer_id, callback) {
		ConsumerObject.findOneAndDelete({_id: consumer_id, realm_id: realm_id}, function(err, consumer) {
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
						message: "No Consumer Found to Delete", 
						err: null
					}, 
					data: {}
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
					}
				})
			}
		})
	}
}

module.exports = Consumer 


/*
{
  error: { code: errNumber, message: humanReadable },
  data: {} // arbitrary data result format.
}
*/
