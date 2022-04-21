import actionsUser from '../../data/users'

export default function getUser(ctx) {
    let search = ctx.request.body
    let response = actionsUser.searchUser(search)
    if(Object.keys(response).length === 0){
        ctx.body =  {
            status: 200, 
            message : 'No se encontró el usuario'}

    }else{
        ctx.body = {status: 200,
                    User: response}
    }
    return ctx
}

