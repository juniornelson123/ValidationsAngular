module.exports = function(app){
	var IndexController = {
		home: function(req, res){
			res.render('index')
		}
	}

	return IndexController
} 