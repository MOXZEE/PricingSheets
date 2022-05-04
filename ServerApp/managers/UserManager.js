const UserDao = require("../data/UserDao")
const User = require('../models/User')

class UserManager{

    constructor(){
        this.userDao = new UserDao()
    }

    getUsers = async () => {
        let result = null
        await this.userDao.getUsers().then(data => {
            const numRecs = data['rowsAffected']
            let records = []
            for (let i = 0; i < numRecs; i+=1){
                const record = data['recordset'][i]
                const user = new User(record['name'], record['pass'], record['id'])
                records[i] = user
            }
            result = records
        })
        return result
    }

    getUserById = async (id) => {
        let result = null
        await this.userDao.getUserById(id).then(data => {
            const record = data['recordset'][0]
            const user = new User(record['name'], record['pass'], record['id'])
            result = user
        }).catch(err => {
            console.error(err)
            result = err
        })
        return result
    }
}

module.exports = UserManager