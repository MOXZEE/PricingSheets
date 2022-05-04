const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

const Common = require('./Common')

class UserDao{

    ID = 'id'

    SELECT_ALL_USERS = 'SELECT * FROM users'

    SELECT_USER_BY_ID = `SELECT * FROM users 
        WHERE id = ${this.ID}`

    constructor(){}

    getUsers = () => Common.queryAll(this.SELECT_ALL_USERS)

    getUserById = (id) => Common.queryAll(this.SELECT_USER_BY_ID, id)
}

module.exports = UserDao