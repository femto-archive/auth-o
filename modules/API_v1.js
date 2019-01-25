const express = require('express')

class API_v1 {
	constructor() {
		this.Router = express.Router()
	}
}


/*
this.Router.get("/realm/:realm/consumer/:consumer", function(req, res) {
			res.status(418)
		})

*/


module.exports = API_v1.Router; 

