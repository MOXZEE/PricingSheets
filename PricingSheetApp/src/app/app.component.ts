import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { HttpService } from 'src/services/http.service';
import { PricingSheet } from './models/PricingSheet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private httpService: HttpService) { }

  title = 'PricingSheetApp';

  pricingSheets: PricingSheet[] = []

  public ngOnInit(): void{
    this.httpService.getPricingSheets().subscribe((data: PricingSheet[]) => {
        this.pricingSheets = data
      }
    )
    
  }
}
