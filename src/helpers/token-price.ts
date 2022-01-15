import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,binance-usd&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["BINANCE"] = data["binancecoin"].usd;
    cache["BUSD"] = data["binance-usd"].usd;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
