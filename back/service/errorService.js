async function analyseError(erreur){
    const erreursPropres = {};
    let i = 0;
    for (const champ in erreur.errors) {
        erreursPropres[champ] = erreur.errors[champ].message;
        i++;
    }
    let error = null;
    if(i == 0){ /// si c'est un erreur de l'Objet Error
        let er = {};
        er[erreur.name] = erreur.message;
        error =  {erreur:er};
    }else{
        error = {erreur:erreursPropres};
    }
    console.log(error);
    return error;
}
exports.analyseError = analyseError;