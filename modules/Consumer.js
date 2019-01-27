const ConsumerModel = require("../models/OAuthConsumer")
const RealmModel = require("../models/OAuthRealms")

const { ERRNOCONSUMERS, ERRUNKNOWN } = Errors

class Consumer {
	constructor() {}

	async getConsumers(params) {
		return ConsumerModel.find(params)
			.then(consumers => {
				if (!consumers.length) return new ERRNOCONSUMERS()
				return consumers
			})
			.catch(err => new ERRUNKNOWN({ err }))
	}

	async createConsumer(params) {
		return RealmModel.findById(params.realm)
			.then(async realm => {
				if (!realm) return new ERRNOREALM({ realm: params.realm })
				
				const consumer = new ConsumerModel(params)
				await consumer.save()

				return consumer
			})
			.catch(err => new ERRUNKNOWN({ err }))
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
