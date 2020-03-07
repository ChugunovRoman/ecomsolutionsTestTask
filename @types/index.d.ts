declare namespace Global {
  interface CurrencyData {
    '15m': number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  }

  interface BlockchainBody {
    USD: CurrencyData;
    AUD: CurrencyData;
    BRL: CurrencyData;
    CAD: CurrencyData;
    CHF: CurrencyData;
    CLP: CurrencyData;
    CNY: CurrencyData;
    DKK: CurrencyData;
    EUR: CurrencyData;
    GBP: CurrencyData;
    HKD: CurrencyData;
    INR: CurrencyData;
    ISK: CurrencyData;
    JPY: CurrencyData;
    KRW: CurrencyData;
    NZD: CurrencyData;
    PLN: CurrencyData;
    RUB: CurrencyData;
    SEK: CurrencyData;
    SGD: CurrencyData;
    THB: CurrencyData;
    TWD: CurrencyData;
  }
}
