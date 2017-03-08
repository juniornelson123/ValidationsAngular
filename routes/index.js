module.exports = function(app){
	var index = app.controllers.index
	console.log(app)
	app.get('/', index.home)
}