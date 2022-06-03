import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockApiService {
   stock:any;
   url="https://stockwebapi.azurewebsites.net/api/stocks"
  constructor(private http:HttpClient) {
   
   }
   getStocks()
   {
     return this.http.get(this.url);
     
   }
}
