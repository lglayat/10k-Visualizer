import React from 'react'



class DailyData extends React.Component{
  constructor(){
    super()

    this.state ={
      data: ''
    }

  }

  componentDidMount(){

    const headers = {
      "Ocp-Apim-Subscription-Key": "0e9e87b8c37e429baffae78b134eacc7"
    }

    fetch("https://services.last10k.com/v1/company/AAPL/quote",{
        method: "GET",
        headers: headers
    })
      .then(resp => resp.json())
      .then(resp => this.setState({
        data: resp
      }))


  }

  render(){

    console.log(this.state.data)
    const data = this.state.data


    return(<div>
      {data.Symbol}<br/>
      {data.StockExchange}<br/>
      {data.DailyHigh}<br/>
      {data.DailyLow}<br/>
      {data.Volume}<br/>
      {data.Name}<br/>
      {data.PeRatio}<br/>
      {data.YearlyHigh}<br/>
      {data.YearlyLow}<br/>
      {data.MarketCapitalization}<br/>


      </div>)
  }
}

export default DailyData
