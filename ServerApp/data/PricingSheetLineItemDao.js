const sql = require('mssql')
const sqlConfig = require('./SqlConfig').config

const Common = require('./Common')

class PricingSheetLineItemDao{

    ID = 'id'

    SELECT_ALL_PRICING_SHEET_LINE_ITEMS = 'SELECT * FROM pricing_sheet_line_item'

    SELECT_PRICING_SHEET_LINE_ITEM_BY_ID = `SELECT * FROM pricing_sheet_line_item 
        WHERE id = @id`

    constructor(){}

    getPricingSheetLineItems = () => Common.queryAll(this.SELECT_ALL_PRICING_SHEET_LINE_ITEMS)

    getPricingSheetLineItemById = (id) => Common.queryById(this.SELECT_PRICING_SHEET_LINE_ITEM_BY_ID, id)

}

module.exports = PricingSheetLineItemDao