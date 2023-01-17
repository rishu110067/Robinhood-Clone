import React, {useState} from 'react'
import '../styles/Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from './Chip'


function Newsfeed() {
    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ]);

  return (
    <div className="newsfeed">
        <div className="newsfeed_container">
            <div className="newsfeed_chartSection">
                <div className="newsfeed_portfolio">
                    <h1>$114,656.84</h1> 
                    <p>+$44.63 (+0.04%) Today</p>
                </div>
                <div className="newsfeed_chart">
                    <LineGraph />
                    <TimeLine />
                </div>
            </div>

            <div className="newsfeed_buying_section">
                <h2> Buying Power</h2>
                <h2> $4.11</h2>
            </div>

            <div className="newsfeed_market_section">
                <div className="newsfeed_market_box">
                    <p> Markets Closed</p>
                    <h1> Happy New Year </h1>
                </div>
            </div>

            <div className="newsfeed_popularlists_section">
                <div className="newsfeed_popularlists_intro">
                    <h1>Popular lists</h1>
                    <p>Show More</p>
                </div>
                <div className="newsfeed_popularlists_badges">
                    {popularTopics.map((topic) => (
                        <Chip 
                            label={topic}
                            image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed