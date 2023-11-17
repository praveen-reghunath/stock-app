import { useStocks } from "../StockProvider";

export default function Button() {
    const { sortStockList } = useStocks();

    const onBtnClick = () => {
        sortStockList()
    }

    return (
        <button onClick={onBtnClick}>Sort</button>
    )
}