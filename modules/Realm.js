const RealmModel = require("../models/OAuthRealms")

class Realm {
	cobstructor() {} 

	getRealms(callback) {
		RealmModel.find({}, function(err, realms) {
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
			else if (!realms) {
				callback({
					error: {
						number: 2, 
						message: "No Realms", 
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
						realm: realms
					}
				})
			}
		})
	}
}

module.exports = Realm 

