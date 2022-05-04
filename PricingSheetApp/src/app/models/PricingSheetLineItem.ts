export class PricingSheetLineItem{
  constructor(name:String, price:number, id?:number, pricingSheetId?:number, createdOn?:Date, updatedOn?:Date) {
    this.name = name
    this.price = price
    this.id = id
    this.pricingSheetId = pricingSheetId
    this.createdOn = createdOn
    this.updatedOn = updatedOn
  }

  name: String
  price: number
  id: number | undefined
  pricingSheetId: number | undefined
  createdOn: Date | undefined
  updatedOn: Date | undefined
}