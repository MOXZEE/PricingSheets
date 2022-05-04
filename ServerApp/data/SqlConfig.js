/***
 * Connection Info for the database connection
 */
const config = {
    user: 'SA',
    password: 'yourStrong(!)Password',
    server: 'localhost',
    database: 'PRICING_SHEET_APPLICATION',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }
  
  exports.config = config