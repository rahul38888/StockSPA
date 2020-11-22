import React from 'react'
import {w3cwebsocket as W3CWebSocket} from 'websocket';

import StockList from './StockList'

const wsURL = 'ws://stocks.mnet.website'

class App extends React.Component{
  constructor(props){
    super(props)
    this.stocks = {};
    this.client = new W3CWebSocket(wsURL);
    this.connectWebSocket();
  }

  connectWebSocket() {
    this.client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    this.client.onmessage = (message) => {
      var time = Date.now();
      JSON.parse(message.data).map(element => {
        var upBy = undefined;
        if(this.stocks[element[0]]){
          upBy = element[1] - this.stocks[element[0]].value;
        }
        this.stocks[element[0]] = {value:element[1], time:time, up:upBy}
      });
      this.setState({
      })
    };
  }

  render(){
    return (
      <div className="App">
        <StockList stocks={this.stocks}/>
      </div>
    );
  }
}

export default App;
