import { Component } from '@angular/core';
import { StockApiService } from './services/stock-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ConsumeApi';
  stocks:any;
  constructor(private stockData:StockApiService)
  {
    this.stockData.getStocks().subscribe((data)=>{
      console.warn("data",data);
      this.stocks=data;
    })
  }
}
