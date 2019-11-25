import React from 'react'

const Ranking = ({ rankingList }) => {
    var rankingArray = Object.keys(rankingList).map(function(key) {
      return rankingList[key];
    });
    const ranking = rankingArray.map(stats => {
      return (
        <div className="individual-stat">
        <p>{ stats.username }</p>
        <p>Points: { stats.current_points }</p>
        </div>
      )
    });
    return (
      <div className="stat-list">
        <h1> Top 20</h1>
        { ranking }
      </div>
    );
  }

  export default Ranking
