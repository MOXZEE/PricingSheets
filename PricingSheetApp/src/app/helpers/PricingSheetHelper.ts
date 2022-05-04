import { PricingSheet } from "../models/PricingSheet";

export class PricingSheetHelper {

  static mapPricingSheets = (data: any) => {
    let sheets: PricingSheet[] = []
    for (let i = 0; i < data['length']; i++){
      const rec = data[i]
      sheets[i] = new PricingSheet(rec['name'], rec['userId'], rec['id'])
    }
    return sheets
  }

}