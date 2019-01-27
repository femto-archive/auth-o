const RealmModel = require("../models/Realm")
const { ERRNOREALM, ERRUNKNOWN } = Errors

class Realm {
	cobstructor() {} 

	static getRealm(slug) {
		return RealmModel.findOne({ 'name.slug': slug })
			.then(realm => {
				if (!realm) return new ERRNOREALM()
				return realm
			})
			.catch(err => new ERRUNKNOWN({ err }))
	}

	static getRealms() {
		return RealmModel.find({})
			.then(realms => {
				return realms
			})
			.catch(err => new ERRUNKNOWN({ err }))
	}

	static createRealm(realmParams) {
		const realm = new RealmModel(realmParams)

		return realm
			.save()
			.catch(err => new ERRUNKNOWN({ err }))
	}
}

module.exports = Realm 

