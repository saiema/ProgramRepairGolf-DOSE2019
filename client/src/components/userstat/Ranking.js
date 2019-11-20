import React from 'react'

const Ranking = ({ rankingList, loadMore }) => {
    const statsList = rankingList.map(stat => {
      return (
        <div className="stat">
          <h1> Usuario: { stat.name } </h1>
          <p> Score: { stat.score }</p>
        </div>
      )
    });

    return (
      <div className="stat-list">
        { statsList }
      </div>
    );
  }

  export default Ranking