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
  selectedMultipliers: number[] = [0,0,0,0,0,0,0,0,0,0]
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
    this.lineItems.forEach(item => {
      if (item.id == this.selectedItemId) {
        this.activeLineItems.push(item)
      }
    })
    let temp: PricingSheetLineItem[] = []
    for (let i = 0; i < this.lineItems.length; i++){
      if (this.lineItems[i].id != this.selectedItemId) {
        temp.push(this.lineItems[i])
        this.selectedMultipliers[i-1] = 1
      }
    }
    this.lineItems = temp
  }

  public removeLineItem($event: any): void{
    const itemIndex = $event.target.id.split('_')[1]
    console.log(itemIndex)
    this.activeLineItems.forEach(item => {
      if (item.id == itemIndex) {
        this.lineItems.push(item)
      }
    })
    let temp: PricingSheetLineItem[] = []
    for (let i = 0; i < this.activeLineItems.length; i++) {
      if (this.activeLineItems[i].id != itemIndex) {
        temp.push(this.activeLineItems[i])
        this.selectedMultipliers[i-1] = 0
      }
    }
    this.activeLineItems = temp
  }

  public addRowIsValid(): boolean{
    return this.selectedItemId === 0
  }

  public onMultiplierChange($event: any): void{
    const multIndex = $event.target.id.split('_')[1]
    const multValue = $event.target.value
    this.selectedMultipliers[multIndex-1] = multValue
    console.log(this.selectedMultipliers)
  }
}
