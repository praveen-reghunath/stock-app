import Card from "./Card";
import { useStocks } from "../StockProvider";

export default function StockListViewer() {
    const { stocks } = useStocks();

    return (
        <div className="stock-list-viewer">
            {
                stocks.map(s => <Card key={s.date} {...s}></Card>)
            }
        </div>
    )
}