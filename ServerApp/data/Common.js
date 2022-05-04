const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

class Common{
    static ID = 'id'

    static queryAll = (queryString) => {
        return sql.connect(sqlConfig).then(pool => pool.request().query(queryString))
    }

    static queryById = (queryString, id) => {
        return sql.connect(sqlConfig).then(pool => {
            return pool.request().input(Common.ID, sql.Int, id)
                .query(queryString)
        })
    }
}

module.exports = Common