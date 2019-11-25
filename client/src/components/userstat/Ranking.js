import React from 'react'

const Ranking = ({ rankingList }) => {
    console.log("Ranking");
    var rankingArray = Object.keys(rankingList).map(function(key) {
      return [Number(key), rankingList[key]];
    });
    console.log(rankingArray);
    console.log("**************");

    return (
      <div className="stat-list">
      </div>
    );
  }

  export default Ranking
