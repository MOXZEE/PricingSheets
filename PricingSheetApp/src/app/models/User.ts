export class User{
  constructor(name: String, pass: String, id?: number) {
    this.name = name
    this.pass = pass
    this.id = id
  }
  
  name: String
  pass: String
  id: number | undefined
}