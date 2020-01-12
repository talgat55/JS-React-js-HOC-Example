import React from 'react';
import Hoc from './HOC';
import StockList from './StockList';
const StocksData = [
    {
        id: 1,
        name: 'TCS'

    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
];
const Stocks = Hoc(
    StockList,
    StocksData
);
const App = ()=> {
  return (
      <div>
          <Stocks/>
      </div>
  );
};
export default App;
