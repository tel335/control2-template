import {getUsers} from '../data/users.js'

const users =  getUsers()
exports.getToken = (id, secret,key) => {
    const token = []
    users.forEach.forEach((element)=> {
        if (element.id == id){
            if (element.secret == secret){
                if(element.key==key){
                    console.log(getUUIDV4())
                    return getUUIDV4()
                }
            } 
            
        }
        
    })
}