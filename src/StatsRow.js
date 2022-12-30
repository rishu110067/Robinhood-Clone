import React from 'react'
import './StatsRow.css'
import StockSVG from './stock.svg';

function StatsRow(props) {
    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
    return (
        <div className="row">
            <div className="row_intro">
                <h1>{props.name}</h1>
                <p>{props.volume && (props.volume + "shares")}</p>
            </div>
            <div className="row_chart">
                <img src={StockSVG} height={16} />
            </div>
            <div className="row__numbers">
                <p className="row_price">{props.price}</p>
                <p className="row_percentage"> +{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatsRow