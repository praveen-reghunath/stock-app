
export default function Card({ date, open, high, low, close }) {
    const profit = close - open;

    return (
        <div className="card">
            <div>Date: {date}</div>
            <div>High: {high}</div>
            <div>Low: {low}</div>
            <div>Profit: {(profit > 0 ? "✅" : "❌")} {profit.toFixed(2)} </div>
        </div>
    )
}