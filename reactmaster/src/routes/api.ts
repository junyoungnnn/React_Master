const Base_URL = `https://api.coinpaprika.com/v1`;
const CoinPrice_URL = "https://ohlcv-api.nomadcoders.workers.dev?coinId=";

export async function fetchCoins() {
  return fetch(`${Base_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${Base_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${Base_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7;
  //   return fetch(`${CoinPrice_URL}/coins/${coinId}/ohlcv/histotical?start=${startDate}&end=${endDate}`).then(
  //     (response) => response.json()
  return fetch(`${CoinPrice_URL}${coinId}`).then((response) => response.json());
}
