module.exports = function(app){
	var Usuario = app.models.usuario
	var UsuarioController = {
		index: function(req, res){
			Usuario.find().exec().then(function(usuarios){
				res.json(usuarios)
			}, function(erro){
				console.log(erro)
			})
		},

		show: function(req, res){
			var _id = req.parans.id
			Usuario.find({_id: id}).exec().then(function(usuario){
				if	(!usuario) throw new	Error("Contato	não	encontrado");
				res.json(usuario)
			}, function(erro){
				console.log(erro)
			})
		},

		create: function(req, res){
			Usuario.create(req.body).then(function(usuario){
				return res.json(usuario)
			}, function(erro){
				res.status(500).json(erro)
			})
		}

	}

	return UsuarioController

}