var sexeServ = require("./sexe.service");
var serv = require("./../../service/errorService");

module.exports = function (app) {
    app.post("/sexe",(req,res)=>{
        sexeServ.insertion(req.body.nom)
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    });
    app.get("/sexes",(req,res)=>{
        sexeServ.getAll()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(err.status || 400);
            serv.analyseError(err).then(error=>{res.send(error)})
        });
    });
}