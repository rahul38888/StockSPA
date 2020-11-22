import React from 'react'
import { ArrowBothIcon, ArrowDownIcon, ArrowUpIcon } from '@primer/octicons-react';

class StockRow extends React.Component{

    timeString(time){
      var timeDiff = this.now - time
      var ss = Math.floor(timeDiff / 1000);
      var hh = Math.floor(ss / 60 / 60);
  
      var str = ""
      if(ss<1){
        str = "Now"
      }
      else if(ss<5){
        str = "A few seconds ago"
      }
      else if(hh<24){
        str = new Date(this.props.time).toLocaleTimeString()
      }
      else{
        str = new Date(this.props.time).toLocaleString()
      }
  
      return <td data-toggle="tooltip" data-placement="right" title={new Date(time).toLocaleString()}>{str}</td>
    }
  
    priceCell(value, up){
      var sign = undefined;
      var direction = "flat"
      if(up===undefined){
          up=0
      }
      
      if(up === 0){
        sign = <ArrowBothIcon size={16} />
      }
      else if(up>0){
        sign = <ArrowUpIcon size={16} />
        direction = "up"
      }
      else if(up<0){
        sign = <ArrowDownIcon size={16} />
        direction = "down"
      }
  
      return <td data-toggle="tooltip" data-placement="right" title={value}>
        {(Math.round(value*100)/100).toFixed(2)}
        <span className={direction+ " font-italic upvalue"} >{sign}{(Math.round(up*100)/100).toFixed(2)}</span>
      </td>
    }
  
    stockName(name){
      return <td className="text-left">{name.toUpperCase()}</td>
    }
  
    render(){
        this.now = Date.now()
        return <tr>
            {this.stockName(this.props.name)}
            {this.priceCell(this.props.value, this.props.up)}
            {this.timeString(this.props.time)}
        </tr>
    }
}

export default StockRow