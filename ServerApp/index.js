const app = require('express')()
const cors = require('cors')

const port = 9000

const PricingSheetManager = require('./managers/PricingSheetManager')
const PricingSheet = require('./models/PricingSheet')
const PricingSheetLineItemManager = require('./managers/PricingSheetLineItemManager')

class Application{

    constructor(){
        this.pricingSheetManager = new PricingSheetManager()
        this.pricingSheetLineItemManager = new PricingSheetLineItemManager()
    }

    configureRoutes = () => {

        app.get('/pricing_sheets', (req, res) => {
            this.pricingSheetManager.getPricingSheets().then(data => {
                const numRecs = data['rowsAffected']
                let records = []
                for (let i = 0; i < numRecs; i+=1){
                    const record = data['recordsets'][i][0]
                    const sheet = new PricingSheet(record['name'], record['user_id'], record['id'])
                    records[i] = sheet
                }
                console.log(records)
                res.json(records)
            })
        })

        app.get('/pricing_sheet/:sheet_id', (req, res) => {
            const sheet_id = req.params['sheet_id']
            this.pricingSheetManager.getPricingSheetById(sheet_id).then(data => {
                data = data['recordset'][0]
                const sheet = new PricingSheet(data['name'], data['user_id'], data['id'])
                res.json(sheet)
            })
        })

        app.get('/pricing_sheet_line_items', (req, res) => {
            this.pricingSheetLineItemManager.getPricingSheetLineItems().then(data => {
                res.json(data)
            })
        })

        app.get('/pricing_sheet_line_item/:line_item_id', (req, res) => {
            const line_item_id = req.params['line_item_id']
            this.pricingSheetLineItemManager.getPricingSheetLineItemById(line_item_id).then(data => {
                res.json(data)
            })
        })
    }

    init = () => {
        app.use(cors())
        this.configureRoutes()
        app.listen(port, () => {
            console.log(`Now listening on port ${port}`)
        })
    }

}

//run the app
pricingSheetApp = new Application()
pricingSheetApp.init()