var utilisateurServ = require("./utilisateur.service");
var serv = require("./../../service/errorService");

module.exports = function (app) {
    app.post("/utilisateur/client",(req,res)=>{
        utilisateurServ.nouveauUtilisateur("CLIENT",req.body.personne,req.body.email)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            ///console.log(err);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    })

    app.post("/utilisateur/update-mdp/:id",(req,res)=>{
        utilisateurServ.updateMotdePasse(req.params.id,req.body.mdp,req.body.mdpConf)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    })

    app.post("/utilisateur/employe",(req,res)=>{
        utilisateurServ.nouveauUtilisateur("EMPLOYE",req.body.personne,req.body.email)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    })

    app.get("/utilisateur/:id",(req,res)=>{
        utilisateurServ.findById(req.params.id)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    })

}