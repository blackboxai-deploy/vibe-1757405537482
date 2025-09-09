import { Stock, Cryptocurrency, NewsItem, PriceData, TechnicalIndicator, MarketSummary } from '@/lib/types/market';
import { mockStocks, mockCryptos, mockNews, generatePriceHistory } from '@/lib/data/mockData';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class MarketDataAPI {
  private static instance: MarketDataAPI;
  private updateInterval: NodeJS.Timeout | null = null;
  private subscribers: Set<() => void> = new Set();

  private constructor() {
    this.startRealTimeUpdates();
  }

  static getInstance(): MarketDataAPI {
    if (!MarketDataAPI.instance) {
      MarketDataAPI.instance = new MarketDataAPI();
    }
    return MarketDataAPI.instance;
  }

  // Real-time price updates simulation
  private startRealTimeUpdates() {
    this.updateInterval = setInterval(() => {
      this.updatePrices();
      this.notifySubscribers();
    }, 10000); // Update every 10 seconds
  }

  private updatePrices() {
    // Update stock prices
    mockStocks.forEach(stock => {
      const changePercent = (Math.random() - 0.5) * 0.1; // Max 5% change per update
      const newPrice = stock.price * (1 + changePercent);
      const change = newPrice - stock.price;
      
      stock.price = Number(newPrice.toFixed(2));
      stock.change = Number(change.toFixed(2));
      stock.changePercent = Number(((change / stock.price) * 100).toFixed(2));
      stock.lastUpdate = new Date().toISOString();
      
      // Update daily high/low
      stock.dayHigh = Math.max(stock.dayHigh, stock.price);
      stock.dayLow = Math.min(stock.dayLow, stock.price);
    });

    // Update crypto prices
    mockCryptos.forEach(crypto => {
      const changePercent = (Math.random() - 0.5) * 0.15; // More volatile
      const newPrice = crypto.price * (1 + changePercent);
      const change = newPrice - crypto.price;
      
      crypto.price = Number(newPrice.toFixed(crypto.price > 1 ? 2 : 6));
      crypto.change24h = Number(change.toFixed(crypto.price > 1 ? 2 : 6));
      crypto.changePercent24h = Number(((change / crypto.price) * 100).toFixed(2));
      crypto.lastUpdate = new Date().toISOString();
      
      // Update daily high/low
      crypto.dayHigh = Math.max(crypto.dayHigh, crypto.price);
      crypto.dayLow = Math.min(crypto.dayLow, crypto.price);
    });
  }

  private notifySubscribers() {
    this.subscribers.forEach(callback => callback());
  }

  subscribe(callback: () => void) {
    this.subscribers.add(callback);
    return () => this.subscribers.delete(callback);
  }

  // Stock APIs
  async getStocks(): Promise<Stock[]> {
    await delay(500);
    return [...mockStocks];
  }

  async getStock(symbol: string): Promise<Stock | null> {
    await delay(300);
    return mockStocks.find(stock => stock.symbol === symbol) || null;
  }

  async getStocksBySymbols(symbols: string[]): Promise<Stock[]> {
    await delay(400);
    return mockStocks.filter(stock => symbols.includes(stock.symbol));
  }

  async searchStocks(query: string): Promise<Stock[]> {
    await delay(300);
    const searchQuery = query.toLowerCase();
    return mockStocks.filter(stock => 
      stock.symbol.toLowerCase().includes(searchQuery) ||
      stock.name.toLowerCase().includes(searchQuery) ||
      stock.nameAr.includes(searchQuery)
    );
  }

  // Cryptocurrency APIs
  async getCryptos(): Promise<Cryptocurrency[]> {
    await delay(500);
    return [...mockCryptos];
  }

  async getCrypto(id: string): Promise<Cryptocurrency | null> {
    await delay(300);
    return mockCryptos.find(crypto => crypto.id === id || crypto.symbol === id) || null;
  }

  async getCryptosBySymbols(symbols: string[]): Promise<Cryptocurrency[]> {
    await delay(400);
    return mockCryptos.filter(crypto => symbols.includes(crypto.symbol));
  }

  async searchCryptos(query: string): Promise<Cryptocurrency[]> {
    await delay(300);
    const searchQuery = query.toLowerCase();
    return mockCryptos.filter(crypto => 
      crypto.symbol.toLowerCase().includes(searchQuery) ||
      crypto.name.toLowerCase().includes(searchQuery) ||
      crypto.nameAr.includes(searchQuery)
    );
  }

  // Price History
  async getPriceHistory(symbol: string, days: number = 30): Promise<PriceData[]> {
    await delay(600);
    
    // Find current price from stocks or cryptos
    const stock = mockStocks.find(s => s.symbol === symbol);
    const crypto = mockCryptos.find(c => c.symbol === symbol);
    const currentPrice = stock?.price || crypto?.price || 100;
    
    return generatePriceHistory(symbol, days, currentPrice);
  }

  // Technical Analysis
  async getTechnicalIndicators(symbol: string): Promise<TechnicalIndicator[]> {
    await delay(400);
    
    const indicators: TechnicalIndicator[] = [
      {
        name: "RSI (14)",
        nameAr: "مؤشر القوة النسبية",
        value: 45 + Math.random() * 20,
        signal: Math.random() > 0.6 ? 'buy' : Math.random() > 0.3 ? 'hold' : 'sell',
        description: "Relative Strength Index indicates momentum",
        descriptionAr: "مؤشر القوة النسبية يشير إلى الزخم"
      },
      {
        name: "MACD",
        nameAr: "تقارب وتباعد المتوسطات",
        value: (Math.random() - 0.5) * 10,
        signal: Math.random() > 0.5 ? 'buy' : 'sell',
        description: "Moving Average Convergence Divergence",
        descriptionAr: "تقارب وتباعد المتوسطات المتحركة"
      },
      {
        name: "MA (20)",
        nameAr: "المتوسط المتحرك 20",
        value: 150 + Math.random() * 50,
        signal: 'hold',
        description: "20-day Moving Average",
        descriptionAr: "المتوسط المتحرك لـ 20 يوم"
      },
      {
        name: "Bollinger Bands",
        nameAr: "نطاقات بولينجر",
        value: 0.65 + Math.random() * 0.3,
        signal: Math.random() > 0.7 ? 'buy' : 'hold',
        description: "Price volatility indicator",
        descriptionAr: "مؤشر تقلب الأسعار"
      }
    ];
    
    return indicators;
  }

  // Market Summary
  async getMarketSummary(): Promise<MarketSummary> {
    await delay(500);
    
    const stocks = [...mockStocks];
    const cryptos = [...mockCryptos];
    
    // Sort by performance
    const allAssets = [...stocks, ...cryptos];
    const gainers = allAssets
      .filter(asset => ('changePercent' in asset ? asset.changePercent : asset.changePercent24h) > 0)
      .sort((a, b) => {
        const aChange = 'changePercent' in a ? a.changePercent : a.changePercent24h;
        const bChange = 'changePercent' in b ? b.changePercent : b.changePercent24h;
        return bChange - aChange;
      })
      .slice(0, 5);
    
    const losers = allAssets
      .filter(asset => ('changePercent' in asset ? asset.changePercent : asset.changePercent24h) < 0)
      .sort((a, b) => {
        const aChange = 'changePercent' in a ? a.changePercent : a.changePercent24h;
        const bChange = 'changePercent' in b ? b.changePercent : b.changePercent24h;
        return aChange - bChange;
      })
      .slice(0, 5);
    
    const trending = allAssets
      .sort((a, b) => {
        const aVolume = 'volume' in a ? a.volume : a.volume24h;
        const bVolume = 'volume' in b ? b.volume : b.volume24h;
        return bVolume - aVolume;
      })
      .slice(0, 5);

    return {
      totalMarketCap: cryptos.reduce((sum, crypto) => sum + crypto.marketCap, 0),
      totalVolume24h: cryptos.reduce((sum, crypto) => sum + crypto.volume24h, 0),
      btcDominance: ((mockCryptos.find(c => c.symbol === 'BTC')?.marketCap || 0) / 
                     cryptos.reduce((sum, crypto) => sum + crypto.marketCap, 0)) * 100,
      activeStocks: stocks.length,
      activeCryptos: cryptos.length,
      topGainers: gainers,
      topLosers: losers,
      trending: trending
    };
  }

  // News
  async getNews(category?: 'stocks' | 'crypto' | 'market' | 'economy'): Promise<NewsItem[]> {
    await delay(400);
    
    if (category) {
      return mockNews.filter(news => news.category === category);
    }
    
    return [...mockNews];
  }

  async getNewsForSymbol(symbol: string): Promise<NewsItem[]> {
    await delay(300);
    return mockNews.filter(news => news.relatedSymbols.includes(symbol));
  }

  // Cleanup
  dispose() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
    this.subscribers.clear();
  }
}

// Export singleton instance
export const marketDataAPI = MarketDataAPI.getInstance();