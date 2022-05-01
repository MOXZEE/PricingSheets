const app = require('express')()

const TestManager = require('./managers/testManager')

const port = 9000

/**
 * SEE BELOW FOR BEGINNING PLAN!!!!
 * THIS WILL ONLY BE A BACKEND TO SEND JSON REPSONSES
 * IT WILL NOT INCLUDE THE HTML FILE SINCE THAT WILL BE AN ANGULAR 
 * APPLICATION ON THE FRONT END THAT WILL CALL 
 * THESE END POINTS WHICH WILL CONNECT TO THE DATABASE
*/

/**
 * Separate components:
 * 1. TSQL db stored in RDS instance
 * 2. Node.js back end
 *  a. Database connection object
 *  b. DAO objects to organize data access logic
 *  c. Send responses as JSON (REST)
 * 3. Angular TS front end
 *  a. Probably boot strap or something for layout
 *  b. [NOT SURE WHAT ELSE THE FRONT]
 */

/**
 * Application Routes
 */

app.get('/', function (req, res) {
    const testManager = new TestManager()
    testManager.getUserTables().then(d => {
        res.json(d)
    })
  })

  /**
   * BRANCH FROM MASTER TO CREATE FEATURE BRANCHES
   */

/**
 * Entry point for the application
 */
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})