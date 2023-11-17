import { useStocks } from "../StockProvider";

import "./Button.scss";

export default function Button() {
    const { sortStockList } = useStocks();

    const onBtnClick = () => {
        sortStockList()
    }

    return (
        <button className="button" onClick={onBtnClick}>Sort</button>
    )
}