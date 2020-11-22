import React from 'react'

import StockRow from './StockRow'

class StockList extends React.Component{

    renderStockRow(name,value,time,up){
        return <StockRow name={name} value={value} time={time} up = {up} />
    }
  
    render(){
      var stocks = this.props.stocks;
      return <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col" className="text-left">TICKER</th>
            <th scope="col">CURRENT PRICE</th>
            <th scope="col">LAST UPDATE</th>
          </tr>
        </thead>
        <tbody>
            {Object.keys(stocks).sort().map((stock, index) => {
              return this.renderStockRow(stock,stocks[stock].value,stocks[stock].time,stocks[stock].up)})
            }
        </tbody>
      </table>
    }
  }

  export default StockList