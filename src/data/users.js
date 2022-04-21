import { faker } from '@faker-js/faker'
import getUUIDV4 from 'uuid'

exports.getUsers = () => {
    const users = []
    for (let i = 1; i <= 10000; i++) {
        users.push(getFakeUser(i))
    }
    return users
}

function getFakeUser (id) {
    return {
        id,
        name: faker.name.findName(),
        email: faker.internet.email(),
        bitcoinAddress: faker.finance.bitcoinAddress()
    }
}

exports.postToken = (key, secret) =>{
    let obj = {
        id : getUsers(),
        secret : secret,
        key: key,
        
    }
    return obj

}