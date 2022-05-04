const app = require('express')()
const cors = require('cors')

const port = 9000

const PricingSheetManager = require('./managers/PricingSheetManager')
const PricingSheetLineItemManager = require('./managers/PricingSheetLineItemManager')
const UserManager = require('./managers/UserManager')
class Application{

    constructor(){
        this.pricingSheetManager = new PricingSheetManager()
        this.pricingSheetLineItemManager = new PricingSheetLineItemManager()
        this.userManager = new UserManager()
    }

    configureRoutes = () => {

        app.get('/pricing_sheets', async (req, res) => {
            const records = await this.pricingSheetManager.getPricingSheets()
            res.json(records)
        })

        app.get('/pricing_sheet/:sheet_id', async (req, res) => {
            const sheet_id = req.params['sheet_id']
            const record = await this.pricingSheetManager.getPricingSheetById(sheet_id)
            res.json(record)
        })

        app.get('/pricing_sheet_line_items', async (req, res) => {
            const records = await this.pricingSheetLineItemManager.getPricingSheetLineItems()
            res.json(records)
        })

        app.get('/pricing_sheet_line_item/:line_item_id', async (req, res) => {
            const line_item_id = req.params['line_item_id']
            const record = await this.pricingSheetLineItemManager.getPricingSheetLineItemById(line_item_id)
            res.json(record)
        })

        app.get('/users', async (req, res) => {
            const records = await this.userManager.getUsers()
            res.json(records)
        })

        app.get('/user/:user_id', async (req, res) => {
            const user_id = req.params['user_id']
            const record = await this.userManager.getUserById(user_id)
            res.json(record)
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