import users from '../../data/users'

exports.getToken = (ctx) =>{
    if(users.keyChecker(ctx.request.body)){
        ctx.response.status = 201 //Created
        ctx.body = users.linkToken(ctx.request.body);
    }else{
        ctx.response.status = 403; //Forbbiden
        ctx.body = { message: "Key, Secret o ID no validos" };
    }
    return ctx;
}

exports.getUser = (ctx) => {
    let mss = users.tokenSeeker(ctx.params.token); //mss es o un mensaje de error especifico o una id valida
    let usr = users.getUsers()
    if(mss === "Usuario no existe"){
        ctx.response.status = 404; //Not found
        ctx.body = { message: mss };
    }else{
        ctx.response.status = 200 //Ok
        //si mss es el id, eso significa que el indice del usuario en el array debe ser index = id - 1.
        ctx.body = usr[mss - 1];
    }
    return ctx;
}