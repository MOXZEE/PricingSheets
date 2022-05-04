const PricingSheetLineItemDao = require('../data/PricingSheetLineItemDao')
const PricingSheetLineItem = require('../models/PricingSheetLineItem')

class PricingSheetLineItemManager{

    constructor(){
        this.pricingSheetLineItemDao = new PricingSheetLineItemDao
    }

    getPricingSheetLineItems = async () => {
        let result = null
        await this.pricingSheetLineItemDao.getPricingSheetLineItems().then(data => {
            const numRecs = data['rowsAffected']
            let records = []
            for (let i = 0; i < numRecs; i+=1){
                const record = data['recordset'][i]
                const line_item = new PricingSheetLineItem(record['name'], record['price'], record['pricing_sheet_id'], record['id'])
                records[i] = line_item
            }
            result = records
        })
        return result
    }

    getPricingSheetLineItemById = async (id) => {
        let result = null
        await this.pricingSheetLineItemDao.getPricingSheetLineItemById(id).then(data => {
            const record = data['recordset'][0]
            const line_item = new PricingSheetLineItem(record['name'], record['price'], record['pricing_sheet_id'], record['id'])
            result = line_item
        }).catch(err => {
            console.error(err)
            result = err
        })
        return result
    }
}

module.exports = PricingSheetLineItemManager