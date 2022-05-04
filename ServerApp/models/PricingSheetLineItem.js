class PricingSheetLineItem{
    constructor(name, price, pricingSheetId, id, createdOn, updatedOn){
        this.name = name
        this.price = price
        this.pricingSheetId = pricingSheetId
        this.id = id
        this.createdOn = createdOn
        this.updatedOn = updatedOn
    }
}

module.exports = PricingSheetLineItem