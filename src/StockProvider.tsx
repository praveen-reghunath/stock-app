import { createContext, useContext, useState } from "react"
import allStocks from "./stocks"

const stockContext = createContext({});

export function useStocks() {
    return useContext(stockContext);
}

export function StockProvider({ children }) {
    const [month, setMonth] = useState(0);

    const totalProfit = 0;
    const totalLoss = 0;

    const stocks = allStocks.filter(x => {
        const date = new Date(x.date);
        return date.getMonth() === month;
    });

    function sortStockList() {

    }

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