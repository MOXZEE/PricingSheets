const PricingSheetDao = require('../data/PricingSheetDao')

class PricingSheetManager{

    constructor(){
        this.PricingSheetDao = new PricingSheetDao()
    }

    getPricingSheets = () => {
        return this.PricingSheetDao.getPricingSheets()
    }

    getPricingSheetById = (id) => {
        return this.PricingSheetDao.getPricingSheetById(id)
    }
}

module.exports = PricingSheetManager