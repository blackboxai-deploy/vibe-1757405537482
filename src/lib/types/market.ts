export interface Stock {
  symbol: string;
  name: string;
  nameAr: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  sector: string;
  sectorAr: string;
  currency: string;
  lastUpdate: string;
  dayHigh: number;
  dayLow: number;
  yearHigh: number;
  yearLow: number;
  pe: number;
  eps: number;
  dividend: number;
}

export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  nameAr: string;
  price: number;
  change24h: number;
  changePercent24h: number;
  volume24h: number;
  marketCap: number;
  rank: number;
  supply: number;
  maxSupply?: number;
  lastUpdate: string;
  dayHigh: number;
  dayLow: number;
  allTimeHigh: number;
  allTimeLow: number;
}

export interface PriceData {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface TechnicalIndicator {
  name: string;
  nameAr: string;
  value: number;
  signal: 'buy' | 'sell' | 'hold';
  description: string;
  descriptionAr: string;
}

export interface MarketSummary {
  totalMarketCap: number;
  totalVolume24h: number;
  btcDominance: number;
  activeStocks: number;
  activeCryptos: number;
  topGainers: (Stock | Cryptocurrency)[];
  topLosers: (Stock | Cryptocurrency)[];
  trending: (Stock | Cryptocurrency)[];
}

export interface NewsItem {
  id: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  source: string;
  publishedAt: string;
  url: string;
  category: 'stocks' | 'crypto' | 'market' | 'economy';
  categoryAr: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  relatedSymbols: string[];
}

export interface Alert {
  id: string;
  symbol: string;
  type: 'price' | 'volume' | 'change';
  condition: 'above' | 'below' | 'equal';
  value: number;
  message: string;
  messageAr: string;
  isActive: boolean;
  createdAt: string;
  triggeredAt?: string;
}

export interface WatchlistItem {
  id: string;
  symbol: string;
  type: 'stock' | 'crypto';
  addedAt: string;
  notes?: string;
  targetPrice?: number;
  stopLoss?: number;
}

export interface Portfolio {
  id: string;
  name: string;
  nameAr: string;
  holdings: PortfolioHolding[];
  totalValue: number;
  totalReturn: number;
  totalReturnPercent: number;
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioHolding {
  symbol: string;
  type: 'stock' | 'crypto';
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  totalValue: number;
  unrealizedGain: number;
  unrealizedGainPercent: number;
  addedAt: string;
}