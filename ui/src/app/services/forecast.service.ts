import { Injectable } from '@angular/core';
import { ForecastPrice } from '../models/foreast-price.model';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServerConstants } from '../constants/server.api.constants';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  forecast: ForecastPrice[];
  columns: string[];

  constructor(private httpClient: HttpClient) {

  }

  /* Makes rest api call to bakend to fetch the forecast prices*/
  public getForecastPrice(date: number) {
    // if (this.forecast == null){
    //   this.forecast = this.initDummyForecast()
    // return this.forecast
    let backendUrl: string = environment.SERVER_API_ROOT_URL + ServerConstants.GET_FORECAST_PRICES_API_ENDPOINT;
    let requestParams = new HttpParams().set('date', date);
    return this.httpClient.get(backendUrl, {params: requestParams, observe:'response', withCredentials: true});
  }


  /* Makes rest api call to bakend to fetch the all calculation dates - dates on which forecasting calculation was done*/
  public getCalculationDates() {
    let backendUrl: string = environment.SERVER_API_ROOT_URL + ServerConstants.GET_CALCULATION_DATES_API_ENDPOINT;    
    return this.httpClient.get(backendUrl, {observe:'response', withCredentials: true});
  }

  /* Makes rest api call to bakend to fetch the forecast dates - Dates for which price forecasting were done*/
  public getForecastDates(date: number) {
    let requestParams: HttpParams = new HttpParams().set('date', date);
    let backendUrl: string = environment.SERVER_API_ROOT_URL + ServerConstants.GET_FORECAST_DATE_API_ENDPOINT;    
    return this.httpClient.get(backendUrl, {params: requestParams, observe:'response', withCredentials: true});
  }


  public getForecastData(): ForecastPrice[] {
    if (this.forecast == null) {
      this.forecast = this.initDummyForecast();
      return this.forecast;
    }
  }   

  public getForecast(): Promise<Awaited<ForecastPrice[]>> {
    return Promise.resolve(this.getForecastData());
  }

  public getColumns(): string[] {
    if (this.columns == null) {
      this.columns = ['Ticker', 'Country', 'Currency', 'ClosePrice', '*PriceDay1', '*PriceDay2', '*PriceDay3',
        '*PriceDay4', '*PriceDay5', '*PriceDay6', '*PriceDay7', 'MarketSentiment', 'Recommendation'];
    }
    return this.columns
  }

  private initDummyForecast() {
    return [
      {
        ticker: 'AAPL',
        description: 'APPLE INC',
        currency: 'CAD',
        lastClosePrice: 171.21,
        forecastedPrices: [172.52, 173.21, 170.00, 175.00, 180.22, 177.85, 180.10],
        recommendation: 'Buy',
        marketSentiment: 'Bullish'
      },
      {
        ticker: 'TSLA',
        description: 'TESLA INC',
        currency: 'CAD',
        lastClosePrice: 250.22,
        forecastedPrices: [255.52, 280.21, 270.00, 265.00, 290.22, 295.85, 288.10],
        recommendation: 'Buy',
        marketSentiment: 'Bullish'
      },
      {
        ticker: 'GOOGL',
        description: 'ALPHABET INC',
        currency: 'CAD',
        lastClosePrice: 250.22,
        forecastedPrices: [130.52, 132.21, 133.00, 132.00, 131.22, 135.85, 134.10],
        recommendation: 'Hold',
        marketSentiment: 'Nuetral'
      },
      {
        ticker: 'NVDA',
        description: 'NVIDIA CORP',
        currency: 'USD',
        lastClosePrice: 434.99,
        forecastedPrices: [434.52, 433.21, 400.00, 395.00, 390.22, 394.85, 393.10],
        recommendation: 'Sell',
        marketSentiment: 'Bearish'
      },
      {
        ticker: 'TD',
        description: 'TORONTO DOMINION BANK',
        currency: 'USD',
        lastClosePrice: 87.75,
        forecastedPrices: [85.52, 83.21, 82.00, 80.00, 72.22, 83.85, 78.10],
        recommendation: 'Sell',
        marketSentiment: 'Bearish'
      },
    ];
  }
}
