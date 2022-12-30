import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Stats.css'
import StatsRow from './StatsRow'

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

  const [stockData, setStockData] = useState([]);

  const getStockData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.log("Error ", error.message);
      });
  }

  useEffect(() => {
    const stockList = ["AAPL", "MSFT", "TSLA", "META", "BABA", "UBER", "DIS", "SBUX"];
    const tempStockData = [];

    let promises = [];
    stockList.map((stock) => {
      promises.push(
        getStockData(stock)
        .then((res) => {
            tempStockData.push({
              name: stock,
              ...res.data
            })
        })
      )
    })

    Promise.all(promises).then(() => {
      setStockData(tempStockData);
    })
  }, []) 

  return (
    <div className="stats">
      <div className="stats_container">
        <div className="stats_header">
          <p>Stocks</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">
            {/* for our current stocks */}

          </div>
        </div>
        <div className="stats_header">
          <p>Lists</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">
            {/* stocks we can buy */}
            {
              stockData.map((stock) => {
                return <StatsRow 
                  key={stock.name}
                  name={stock.name}
                  openPrice={stock.o}
                  price={stock.c}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
