export class PricingSheet{
  constructor(name: String, userId?: number, id?: number, createdOn?: Date, updatedOn?: Date) {
    this.name = name
    this.userId = userId
    this.id = id
    this.createdOn = createdOn
    this.updatedOn = updatedOn
  }
  
  id: number | undefined
  name: String
  userId: number | undefined
  createdOn: Date | undefined
  updatedOn: Date | undefined

}