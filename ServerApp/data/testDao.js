/***
 * This is an example of what a DAO class be structured as
 */
const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

class TestDao{

    constructor(){
        this.drivingQuery = `SELECT * FROM sysobjects WHERE type = @input_param`
    }

    getUserTables = async () => {
        return await sql.connect(sqlConfig).then(pool => {
            return pool.request().input('input_param', 'U'/*This is the value*/)
            .query(this.drivingQuery)
        })
    }
}

module.exports = TestDao