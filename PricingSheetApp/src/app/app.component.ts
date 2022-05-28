import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpService } from 'src/services/http.service';
import { PricingSheet } from './models/PricingSheet';
import { PricingSheetLineItem } from './models/PricingSheetLineItem';
import { User } from './models/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private httpService: HttpService) { }

  title = 'PricingSheetApp';

  pricingSheets: PricingSheet[] = []
  lineItems: PricingSheetLineItem[] = []
  activeLineItems: PricingSheetLineItem[] = []
  users: User[] = []
  selectedItemId: number = 0
  selectedMultipliers = new Map()
  customerTotal: number = 0

  multiplierOptions = [1,2,3,4,5,6,7,8,9,10]

  public ngOnInit(): void {
    this.httpService.getPricingSheets().subscribe((data: PricingSheet[]) => {
        this.pricingSheets = data  
    })
    this.httpService.getPricingSheetLineItem().subscribe((data: PricingSheetLineItem[]) => {
      this.lineItems = data
    })
    this.httpService.getUsers().subscribe((data: User[]) => {
      this.users = data
    })
  }

  public onAddBtnClick(): void{
    let temp: PricingSheetLineItem[] = []
    this.lineItems.forEach(item => {
      if (item.id == this.selectedItemId) {
        this.activeLineItems.push(item)
        this.selectedMultipliers.set(item.id, 1)
      } else {
        temp.push(item)
      }
    })
    this.lineItems = temp
    this.customerTotal = this.calculateTotal()
  }

  public removeLineItem($event: any): void{
    const itemIndex = $event.target.id.split('_')[1]
    let temp: PricingSheetLineItem[] = []
    this.activeLineItems.forEach(item => {
      if (item.id == itemIndex) {
        this.lineItems.push(item)
        this.selectedMultipliers.delete(item.id)
      } else {
        temp.push(item)
      }
    })
    this.activeLineItems = temp
    this.customerTotal = this.calculateTotal()
  }

  public addRowIsValid(): boolean{
    return this.selectedItemId === 0
  }

  public onMultiplierChange($event: any): void{
    const multIndex = +$event.target.id.split('_')[1]
    const multValue = +$event.target.value
    this.selectedMultipliers.set(multIndex, multValue)
    this.customerTotal = this.calculateTotal()
  }

  private calculateTotal(): number{
    let total = 0
    this.activeLineItems.forEach(item => {
      console.log(this.selectedMultipliers, item.id, this.selectedMultipliers.has(item.id))
      if (this.selectedMultipliers.has(item.id)) {
        const multiplier = this.selectedMultipliers.get(item.id)
        console.log(item.price, multiplier)
        total += multiplier * item.price
      }
    })
    return total
  }
}
