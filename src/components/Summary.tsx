import { useStocks } from "../StockProvider";

export default function Summary() {
    const { totalProfit, totalLoss } = useStocks();

    return (
        <>
            <div>Total Profits: {totalProfit}</div>
            <div>Total Loss: {totalLoss}</div>
        </>
    )
}