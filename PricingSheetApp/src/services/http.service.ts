import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError, of, Observable } from 'rxjs';
import { PricingSheet } from 'src/app/models/PricingSheet';
import { PricingSheetHelper } from 'src/app/helpers/PricingSheetHelper'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }
    
  getPricingSheets(): Observable<PricingSheet[]> {
    return this.http.get<PricingSheet>('http://localhost:9000/pricing_sheets', this.httpOptions)
      .pipe(
        map(PricingSheetHelper.mapPricingSheets)
      )
  }
}
