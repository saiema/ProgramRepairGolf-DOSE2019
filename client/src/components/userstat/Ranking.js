import React from 'react'
import style from './style.css'

const Ranking = ({ rankingList }) => {
    var rankingArray = Object.keys(rankingList).map(function(key) {
      return rankingList[key];
    });
    const ranking = rankingArray.map(stats => {
      return (
        <div>
          <li>
            { stats.username } - Points: { stats.current_points }
          </li>
        </div>
      )
    });
    return (
      <div className="ranking">
        <h1 class="center"> Top 20 </h1>
        <ul class="ranking">
          { ranking }
        </ul>
      </div>
    );
  }

  export default Ranking
