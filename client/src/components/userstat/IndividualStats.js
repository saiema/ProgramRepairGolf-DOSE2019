import React from 'react'

const IndividualStats = ({ stats }) => {
    return (
      <div className="individual-stat">
        <h1>{ stats.username }</h1>
        <p>Points: { stats.current_points }</p>
        <p>Created challenges : { stats.created_challenges }</p>
        <p>Solved challenges: { stats.solved_challenges }</p>
      </div>
    );
  }

  export default IndividualStats
