declare namespace Ws {
  interface Course extends Global.CurrencyData {
    timestamp: number;
  }

  interface Data<T> {
    data: T;
  }
}
