import { PricingSheet } from "../models/PricingSheet"
import { PricingSheetLineItem } from "../models/PricingSheetLineItem"
import { User } from "../models/User"

export class HttpDataMappingHelper {

  static mapPricingSheets = (data: any): PricingSheet[] => {
    let sheets: PricingSheet[] = []
    for (let i = 0; i < data['length']; i++){
      const rec = data[i]
      sheets[i] = HttpDataMappingHelper.mapPricingSheet(rec)
    }
    return sheets
  }

  static mapPricingSheet = (rec: any): PricingSheet => {
    return new PricingSheet(rec['name'], rec['userId'], rec['id'])
  }

  static mapPricingSheetLineItems = (data: any): PricingSheetLineItem[] => {
    let lineItems: PricingSheetLineItem[] = []
    for (let i = 0; i < data['length']; i++){
      const rec = data[i]
      lineItems[i] = HttpDataMappingHelper.mapPricingSheetLineItem(rec)
    }
    return lineItems
  }

  static mapPricingSheetLineItem = (rec: any): PricingSheetLineItem => {
    return new PricingSheetLineItem(rec['name'], rec['price'], rec['id'])
  }

  static mapUsers = (data: any): User[] => {
    let user: User[] = []
    for (let i = 0; i < data['length']; i++){
      const rec = data[i]
      user[i] = HttpDataMappingHelper.mapUser(rec)
    }
    return user
  }

  static mapUser = (rec: any): User => {
    return new User(rec['name'], rec['pass'], rec['id'])
  }

}