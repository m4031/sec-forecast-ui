import { Component } from '@angular/core';
import { ForecastDate } from 'src/app/models/foreast-date.model';
import { ForecastPrice } from 'src/app/models/foreast-price.model';
import { ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-view-forecast',
  templateUrl: './view-forecast.component.html',
  styleUrls: ['./view-forecast.component.scss']
})
export class ViewForecastComponent {
  forecastPrice: ForecastPrice[];
  columns: string[];
  calculationDates: Array<number>;
  forecastDate: ForecastDate;


  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    // this.forecastService.getForecast().then((data) => {
    //   this.forecastData = data;
    // });

    /* Fetch the all calculation dates - dates on which forecasting calculation was done*/
    this.forecastService.getCalculationDates().subscribe(
      respData => {
        this.calculationDates = <Array<number>> respData.body;
        if (this.calculationDates.length > 0) {
          this.fetchForecastDates(this.calculationDates[0]); // Fetch dates for which forecasting were donw
          this.fetchForecastPrices(this.calculationDates[0]); // Fetch forecast price
        }        
      }, error => {
        console.log(error);
      }
    );        
    this.columns = this.forecastService.getColumns()
  }

  /* Fetch the forecast dates - Dates for which price forecasting were done*/
  fetchForecastDates(date: number){
    this.forecastService.getForecastDates(date).subscribe(
      respData => {
        // console.log(respData);
        this.forecastDate = <ForecastDate> respData.body
      }, error => {
        console.log(error);
      }
    );
  }

  /* Fetch Forecast Prices*/
  fetchForecastPrices(date: number){
    this.forecastService.getForecastPrice(date).subscribe(
      respData => {
        // console.log(respData);
        this.forecastPrice = <ForecastPrice[]> respData.body
      }, error => {
        console.log(error);
      }
    );
  }

  convertNumDateToStrDate(date: number) : string {
    let strDate: string = date.toString();
    strDate = strDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
    return strDate;
  }

  convertStrDateToNumDate(date: number) : number {
    let strDate: string = date.toString();
    strDate = strDate.replace(/(\d{4})(\d{2})(\d{2})/, "$1$2$3");
    return Number.parseInt(strDate);
  }

  clear() {

  }

}
