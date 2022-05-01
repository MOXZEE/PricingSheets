/**
 * Example of a manager class
 * managers exist only as a proxy class to call DAO methods from
 */

const TestDao = require('../data/testDao')

class TestManager{

    constructor(){
        this.testDao = new TestDao();
    }

    getUserTables(){
        return this.testDao.getUserTables()
    }
}

module.exports = TestManager