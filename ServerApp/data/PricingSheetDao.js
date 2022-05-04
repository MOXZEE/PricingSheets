const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

const Common = require('./Common')

class PricingSheetDao{

    ID = 'id'

    SELECT_ALL_PRICING_SHEETS = `SELECT * FROM pricing_sheet`

    SELECT_PRICING_SHEET_BY_ID = `SELECT * FROM pricing_sheet 
        WHERE id = @${this.ID}`

    constructor(){}

    getPricingSheets = () => Common.queryAll(this.SELECT_ALL_PRICING_SHEETS)

    getPricingSheetById = (id) => Common.queryById(this.SELECT_PRICING_SHEET_BY_ID, id)
}

module.exports = PricingSheetDao