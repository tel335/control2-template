import { faker } from '@faker-js/faker'

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

function searchUser (search) {
    const object = {
        searchUser : search.id
    }
    
    let response = []
    let user = this.getUsers()

    user.forEach((element) => {
        if(element.id == object.searchUser){
            response.push(element)
        }
    })

    return response
}