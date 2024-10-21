const crypto = require ("crypto");
const { realpathSync } = require("fs");

function encriptarPassword(password){
    const salt = crypto.randomBytes(32).toString("hex");
    //console.log(salt);
    const hash = crypto.scryptSync(password, salt, 100000, 64, 'sha512').toString("hex");
    //console.log(hash);
    return{
        salt,
        hash
    }
}
    
function validarPassword(password, salt, hash){
        const hashEvaluar = crypto.scryptSync(password, salt, 100000, 64, 'sha512').toString("hex");
        return hashEvaluar == hash;
}

function usuarioAutorizado(){

}

function adminAutorizado(){

}

module.exports={
    encriptarPassword,
    validarPassword,
    usuarioAutorizado,
    adminAutorizado
}