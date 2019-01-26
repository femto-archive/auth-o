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
			else if (!consumers) {
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
					data: {
						consumer: consumers
					}
				})
			}
		})
	}
	createConsumer(realm_id, parameters, callback) {
		let consumerOptions = {
			name: parameters.name, 
			consumer_secret: parameters.secret, 
			redirect_uri: parameters.uri, 
			realm_id: realm_id
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
					data: {
						consumer: consumer
					}
				})
			}
		})
	}
	updateConsumer(realm_id, consumer_id, parameters, callback) {
		let consumerOptions = {
			name: parameters.name, 
			consumer_secret: parameters.secret, 
			redirect_uri: parameters.uri, 
			realm_id: realm_id
		}
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
