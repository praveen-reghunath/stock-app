import { createContext, useContext, useState } from "react"
import allStocks from "./stocks"
import { Stock, StocksContext, StockProviderProps } from './types'

const stockContext = createContext({} as StocksContext);

export function useStocks() {
    return useContext<StocksContext>(stockContext);
}

function getFiltetedStocks(month: Number, canSort: Boolean) {
    const list = allStocks.filter(x => {
        const date = new Date(x.date);
        return date.getMonth() === month;
    });

    if (canSort) {
        return list.sort(x => x.open - x.close);
    }
    else {
        return list;
    }
}

export function StockProvider({ children }: StockProviderProps) {
    const [month, setMonth] = useState(0);

    let hasSorted = false;

    let stocks: Array<Stock> = getFiltetedStocks(month, hasSorted);

    function sortStockList() {
        hasSorted = !hasSorted;
        stocks = getFiltetedStocks(month, hasSorted);
    }

    const profits = stocks.map(x => x.close - x.open);
    const totalProfit = profits.filter(x => x > 0).reduce((acc, val) => acc + val, 0);
    const totalLoss = profits.filter(x => x < 0).reduce((acc, val) => acc + val, 0);

    return (
        <stockContext.Provider value={{
            stocks,
            setMonth,
            totalLoss,
            totalProfit,
            sortStockList
        }}>
            {children}
        </stockContext.Provider>
    )
}