import { use } from 'express/lib/application'
import getFakeUser from '../data/users'
import getUsers from '../data/users'

const usersData = require('../data/users') //userData es el JSON donde estan los archivos

import getUUIDV4 from '../utils/uuid'

exports.getToken = (id) =>{
    const token = []
    const users=usersData.getUsers()
    users.forEach( (element)=>{
        usuario={}
        if(element === users.id){
            //generar token
            tokengenerado=getUUIDV4()
           //usuario.token=element.usersData.id
            token.push(tokengenerado)

            //para asociar el token
            usuario.token=tokengenerado

        }else{
            console.log('ERROR NO EXISTE USUARIO')
            //const mensaje='ERROR NO EXISTE USUARIO'
            //token.push(mensaje)
        } 
        
    })
/* 
    secret.usersData.forEach((element)=>{
        if(element){

        }else{
            console.log('ERROR LLAVE INCORRECTA')

        }
    })

    KEY.usersData.forEach((element)=>{
        if(element){
            
        }else{
            console.log('ERROR KEY INCORRECTA')

        }
    }) */

    return token
}


exports.getUser = (token)=>{
    const user= []
    const usersD=usersData.getUsers()
    usersD.forEach((element)=>{
        if(element.token === token){
            user.push(element)
        }else{
            console.log("Error no hay usuario")
        }
    })
    return user
}