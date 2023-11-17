import { useStocks } from "../StockProvider";

export default function Summary() {
    const { totalProfit, totalLoss } = useStocks();

    return (
        <>
            <div>Total Profits: {totalProfit.toFixed(2)}</div>
            <div>Total Loss: {totalLoss.toFixed(2)}</div>
        </>
    )
}