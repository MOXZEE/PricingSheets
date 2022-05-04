const PricingSheetDao = require('../data/PricingSheetDao')
const PricingSheet = require('../models/PricingSheet')

class PricingSheetManager{

    constructor(){
        this.pricingSheetDao = new PricingSheetDao()
    }

    getPricingSheets = async () => {
        let result = null
        await this.pricingSheetDao.getPricingSheets().then(data => {
            const numRecs = data['rowsAffected']
            let records = []
            for (let i = 0; i < numRecs; i+=1){
                const record = data['recordset'][i]
                const sheet = new PricingSheet(record['name'], record['user_id'], record['id'])
                records[i] = sheet
            }
            console.log(records)
            result = records
        })
        return result
    }

    getPricingSheetById = async (id) => {
        let result = null
        await this.pricingSheetDao.getPricingSheetById(id).then(data => {
            data = data['recordset'][0]
            const sheet = new PricingSheet(data['name'], data['user_id'], data['id'])
            result = sheet
        }).catch(err => {
            console.error(err)
            result = err
        })
        return result
    }
}

module.exports = PricingSheetManager