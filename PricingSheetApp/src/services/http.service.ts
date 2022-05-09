import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { PricingSheet } from 'src/app/models/PricingSheet';
import { HttpDataMappingHelper } from 'src/app/helpers/HttpDataMappingHelper'
import { PricingSheetLineItem } from 'src/app/models/PricingSheetLineItem'
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private static BASE_URL = 'http://localhost:9000/'

  private static httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }
    
  getPricingSheets(): Observable<PricingSheet[]> {
    return this.http.get<PricingSheet>(`${HttpService.BASE_URL}pricing_sheets`, HttpService.httpOptions)
      .pipe(
        map(HttpDataMappingHelper.mapPricingSheets)
      )
  }

  getPricingSheetLineItem(): Observable<PricingSheetLineItem[]> {
    return this.http.get<PricingSheetLineItem[]>(`${HttpService.BASE_URL}pricing_sheet_line_items`, HttpService.httpOptions)
      .pipe(
        map(HttpDataMappingHelper.mapPricingSheetLineItems)
      )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${HttpService.BASE_URL}users`, HttpService.httpOptions)
      .pipe(
        map(HttpDataMappingHelper.mapUsers)
      )
  }
}
