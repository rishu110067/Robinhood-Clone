import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Stats.css'
import StatsRow from './StatsRow'
import { db } from "./firebase"

const TOKEN = process.env.REACT_APP_TOKEN;
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

  const [stockData, setStockData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
        let promises = [];
        let tempData = [];
        snapshot.docs.map((doc) => {
          promises.push(getStockData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )})
        Promise.all(promises).then(()=>{
          setMyStocks(tempData);
        })
    })
  }

  const getStockData = async (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.log("Error ", error.message);
      });
  }

  useEffect(() => {
    const stockList = ["AAPL", "MSFT", "TSLA", "META", "BABA", "UBER", "DIS", "SBUX"];
    const tempStockData = [];
    getMyStocks();
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
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
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
