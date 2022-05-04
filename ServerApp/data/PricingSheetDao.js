const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

class PricingSheetDao{

    ID = 'id'

    SELECT_ALL_PRICING_SHEETS = `SELECT * FROM pricing_sheet`

    SELECT_PRICING_SHEET_BY_ID = `SELECT * FROM pricing_sheet 
        WHERE id = @${this.ID}`

    constructor(){}

    getPricingSheets = async () => {
        return await sql.connect(sqlConfig).then(pool => {
            return pool.request().query(this.SELECT_ALL_PRICING_SHEETS)
        })
    }

    getPricingSheetById = async (id) => {
        return await sql.connect(sqlConfig).then(pool => {
            return pool.request().input(this.ID, sql.Int, id)
                .query(this.SELECT_PRICING_SHEET_BY_ID)
        })
    }
}

module.exports = PricingSheetDao