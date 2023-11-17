import { ReactNode } from "react"

export type Stock = {
    date: String,
    open: Number,
    high: Number,
    low: Number,
    close: Number
}

export type StocksContext = {
    stocks: Array<Stock>,
    setMonth: (month: Number) => void,
    totalLoss: Number,
    totalProfit: Number,
    sortStockList: () => void
}

export type StockProviderProps = {
    children: ReactNode
}