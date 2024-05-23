const Base_URL = `https://api.coinpaprika.com/v1`

export async function fetchCoins() {
    return fetch(`${Base_URL}/coins`).then((response) => 
        response.json()
    );
}

export function fetchCoinInfo(coinId:string){
    return fetch(`${Base_URL}/coins/${coinId}`).then((response) => 
        response.json()
    );
}

export function fetchCoinTickers(coinId:string){
    return fetch(`${Base_URL}/tickers/${coinId}`).then((response) => 
        response.json()
    );
}