export interface FinancialAsset {
  id: string;
  name: string;
  assetClass: string;
  currency: string;
  ticker: string;
  logoUrl: string;
  country: string;
  lastClosePrice: number;
  industry: string;
  sector: string;
  companyName: string;
  ceo: string;
  shortDescription: string;
  employeeCount: number;
  marketCap: number;
  trailingPE: number;
  trailingAnnualDividendYield: number;
  priceTarget: {
    low: string;
    high: string;
    median: string;
    average: string;
  };
  priceToSalesRatio: number;
  priceToBookRatio: number;
  profitMargin: number;
  revenueTTM: number;
  revenuePerShareTTM: number;
  ebitda: number;
  average10DaysVolume: number;
  average30DaysVolume: number;
  analystRating: {
    buy: number;
    hold: number;
    sell: number;
    strongBuy: number;
    strongSell: number;
  };
}
