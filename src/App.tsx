import './App.css'

import { StockProvider } from "./StockProvider";
import MonthSelector from './components/MonthSelector';
import Summary from './components/Summary';
import Button from './components/Button';
import StockListViewer from './components/StockListViewer';
function App() {

  const onSorClick = () => { };

  return (
    <>
      <StockProvider>
        <header>
          <h1>Stock performance of MSFT</h1>
        </header>
        <div className=''>
          <div className='controls'>
            <MonthSelector className="month"></MonthSelector>
            <Button></Button>
          </div>
          <StockListViewer></StockListViewer>
        </div>
        <footer>
          <Summary></Summary>
        </footer>
      </StockProvider>
    </>
  )
}

export default App
