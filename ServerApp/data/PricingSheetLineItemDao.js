const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

class PricingSheetLineItemDao{

    ID = 'id'

    SELECT_ALL_PRICING_SHEET_LINE_ITEMS = 'SELECT * FROM pricing_sheet_line_item'

    SELECT_PRICING_SHEET_LINE_ITEM_BY_ID = `SELECT * FROM pricing_sheet_line_item 
        WHERE id = @id`

    constructor(){}

    getPricingSheetLineItems = () => {
        return sql.connect(sqlConfig).then(pool => {
            return pool.request().query(this.SELECT_ALL_PRICING_SHEET_LINE_ITEMS)
        })
    }

    getPricingSheetLineItemById = (id) => {
        return sql.connect(sqlConfig).then(pool => 
            pool.request().input(this.ID, sql.Int, id)
                .query(this.SELECT_PRICING_SHEET_LINE_ITEM_BY_ID)
        )
    }

}

module.exports = PricingSheetLineItemDao