module.exports = function(app){
	var usuario = app.controllers.usuarios

	app.get("/usuarios", usuario.index)
	app.get("/usuarios/:id",usuario.show)
	app.post("/usuarios",usuario.create)
}