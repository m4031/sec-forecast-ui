
export interface ForecastPrice {
  id?: string;
  ticker?: string;
  description?: string;
  currency?: string;
  lastClosePrice: number,
  forecastedPrices: number[];
  marketTrend?: string;
  marketSentiment?: string;
  forecastTrend?: string;  
}
