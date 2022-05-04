const PricingSheetLineItemDao = require('../data/PricingSheetLineItemDao')

class PricingSheetLineItemManager{

    constructor(){
        this.pricingSheetLineItemDao = new PricingSheetLineItemDao
    }

    getPricingSheetLineItems = () => {
        return this.pricingSheetLineItemDao.getPricingSheetLineItems()
    }

    getPricingSheetLineItemById = (id) => {
        return this.pricingSheetLineItemDao.getPricingSheetLineItemById(id)
    }
}

module.exports = PricingSheetLineItemManager