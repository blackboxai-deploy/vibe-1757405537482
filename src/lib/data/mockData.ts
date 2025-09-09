import { Stock, Cryptocurrency, NewsItem, PriceData } from '@/lib/types/market';

export const mockStocks: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    nameAr: "شركة أبل",
    price: 175.43,
    change: 2.15,
    changePercent: 1.24,
    volume: 45678900,
    marketCap: 2780000000000,
    sector: "Technology",
    sectorAr: "التكنولوجيا",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
    dayHigh: 176.50,
    dayLow: 173.20,
    yearHigh: 198.23,
    yearLow: 124.17,
    pe: 28.5,
    eps: 6.15,
    dividend: 0.96
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    nameAr: "مايكروسوفت",
    price: 378.91,
    change: -1.87,
    changePercent: -0.49,
    volume: 23456789,
    marketCap: 2820000000000,
    sector: "Technology",
    sectorAr: "التكنولوجيا",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
    dayHigh: 381.20,
    dayLow: 376.45,
    yearHigh: 420.82,
    yearLow: 231.85,
    pe: 32.1,
    eps: 11.80,
    dividend: 3.00
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    nameAr: "ألفابت (جوجل)",
    price: 142.56,
    change: 3.22,
    changePercent: 2.31,
    volume: 34567891,
    marketCap: 1780000000000,
    sector: "Communication",
    sectorAr: "الاتصالات",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
    dayHigh: 143.89,
    dayLow: 140.12,
    yearHigh: 153.78,
    yearLow: 83.34,
    pe: 25.4,
    eps: 5.61,
    dividend: 0.00
  },
  {
    symbol: "TSLA",
    name: "Tesla, Inc.",
    nameAr: "تسلا",
    price: 248.42,
    change: -5.67,
    changePercent: -2.23,
    volume: 56789012,
    marketCap: 789000000000,
    sector: "Consumer Cyclical",
    sectorAr: "السلع الاستهلاكية",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
    dayHigh: 255.30,
    dayLow: 246.80,
    yearHigh: 414.50,
    yearLow: 138.80,
    pe: 65.2,
    eps: 3.81,
    dividend: 0.00
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    nameAr: "إنفيديا",
    price: 875.28,
    change: 18.45,
    changePercent: 2.15,
    volume: 45678123,
    marketCap: 2150000000000,
    sector: "Technology",
    sectorAr: "التكنولوجيا",
    currency: "USD",
    lastUpdate: new Date().toISOString(),
    dayHigh: 882.50,
    dayLow: 868.20,
    yearHigh: 950.02,
    yearLow: 108.13,
    pe: 73.8,
    eps: 11.85,
    dividend: 0.16
  }
];

export const mockCryptos: Cryptocurrency[] = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    nameAr: "بيتكوين",
    price: 43250.67,
    change24h: 1245.32,
    changePercent24h: 2.97,
    volume24h: 15678901234,
    marketCap: 847000000000,
    rank: 1,
    supply: 19587462,
    maxSupply: 21000000,
    lastUpdate: new Date().toISOString(),
    dayHigh: 43890.12,
    dayLow: 41987.45,
    allTimeHigh: 69044.77,
    allTimeLow: 67.81
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    nameAr: "إيثريوم",
    price: 2567.89,
    change24h: -45.23,
    changePercent24h: -1.73,
    volume24h: 8901234567,
    marketCap: 308000000000,
    rank: 2,
    supply: 120276543,
    lastUpdate: new Date().toISOString(),
    dayHigh: 2612.45,
    dayLow: 2534.12,
    allTimeHigh: 4878.26,
    allTimeLow: 0.43
  },
  {
    id: "binancecoin",
    symbol: "BNB",
    name: "BNB",
    nameAr: "بينانس كوين",
    price: 312.45,
    change24h: 8.67,
    changePercent24h: 2.86,
    volume24h: 567891234,
    marketCap: 46800000000,
    rank: 4,
    supply: 149865394,
    maxSupply: 200000000,
    lastUpdate: new Date().toISOString(),
    dayHigh: 318.90,
    dayLow: 308.12,
    allTimeHigh: 686.31,
    allTimeLow: 0.096
  },
  {
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    nameAr: "كاردانو",
    price: 0.4789,
    change24h: 0.0234,
    changePercent24h: 5.13,
    volume24h: 234567890,
    marketCap: 16700000000,
    rank: 9,
    supply: 34927392428,
    maxSupply: 45000000000,
    lastUpdate: new Date().toISOString(),
    dayHigh: 0.4912,
    dayLow: 0.4623,
    allTimeHigh: 3.09,
    allTimeLow: 0.017
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    nameAr: "سولانا",
    price: 98.76,
    change24h: -2.34,
    changePercent24h: -2.32,
    volume24h: 1234567890,
    marketCap: 43200000000,
    rank: 5,
    supply: 437654123,
    lastUpdate: new Date().toISOString(),
    dayHigh: 102.45,
    dayLow: 96.78,
    allTimeHigh: 259.96,
    allTimeLow: 0.50
  }
];

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "Apple Reports Strong Q4 Earnings Despite Market Challenges",
    titleAr: "أبل تحقق أرباح قوية في الربع الرابع رغم تحديات السوق",
    summary: "Apple Inc. exceeded analyst expectations with strong iPhone sales and services revenue growth.",
    summaryAr: "تجاوزت شركة أبل توقعات المحللين بمبيعات قوية لأجهزة الآيفون ونمو في عائدات الخدمات.",
    source: "Financial Times",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    url: "#",
    category: "stocks",
    categoryAr: "أسهم",
    sentiment: "positive",
    relatedSymbols: ["AAPL"]
  },
  {
    id: "2",
    title: "Bitcoin Surges Past $43,000 on Institutional Adoption News",
    titleAr: "البيتكوين يتجاوز 43,000 دولار بعد أخبار التبني المؤسسي",
    summary: "Major financial institutions announce increased Bitcoin allocations in their portfolios.",
    summaryAr: "مؤسسات مالية كبرى تعلن زيادة تخصيصات البيتكوين في محافظها الاستثمارية.",
    source: "CoinDesk",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    url: "#",
    category: "crypto",
    categoryAr: "عملات مشفرة",
    sentiment: "positive",
    relatedSymbols: ["BTC"]
  },
  {
    id: "3",
    title: "Fed Signals Potential Rate Cuts in 2024",
    titleAr: "البنك المركزي الأمريكي يشير لاحتمال خفض الفوائد في 2024",
    summary: "Federal Reserve officials hint at possible interest rate reductions next year amid economic uncertainty.",
    summaryAr: "مسؤولو البنك المركزي يلمحون لإمكانية خفض أسعار الفائدة العام القادم وسط عدم اليقين الاقتصادي.",
    source: "Reuters",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    url: "#",
    category: "market",
    categoryAr: "السوق",
    sentiment: "neutral",
    relatedSymbols: []
  }
];

export const mockPriceData: PriceData[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  
  const basePrice = 175 + Math.sin(i * 0.2) * 10;
  const volatility = Math.random() * 5;
  
  return {
    timestamp: date.toISOString(),
    open: basePrice - volatility,
    high: basePrice + volatility + Math.random() * 3,
    low: basePrice - volatility - Math.random() * 3,
    close: basePrice + (Math.random() - 0.5) * 4,
    volume: Math.floor(Math.random() * 50000000) + 10000000
  };
});

// Helper functions for generating realistic data
export const generateRandomPrice = (basePrice: number, volatility: number = 0.05): number => {
  return basePrice * (1 + (Math.random() - 0.5) * 2 * volatility);
};

export const generatePriceHistory = (
  symbol: string,
  days: number = 30,
  basePrice: number = 100
): PriceData[] => {
  const data: PriceData[] = [];
  let currentPrice = basePrice;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const volatility = 0.02 + Math.random() * 0.03;
    const change = (Math.random() - 0.5) * 2 * volatility;
    
    const open = currentPrice;
    currentPrice = currentPrice * (1 + change);
    const high = Math.max(open, currentPrice) * (1 + Math.random() * 0.01);
    const low = Math.min(open, currentPrice) * (1 - Math.random() * 0.01);
    const volume = Math.floor(Math.random() * 50000000) + 1000000;
    
    data.push({
      timestamp: date.toISOString(),
      open,
      high,
      low,
      close: currentPrice,
      volume
    });
  }
  
  return data;
};