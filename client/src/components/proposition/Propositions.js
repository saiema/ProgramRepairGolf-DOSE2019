import React from 'react'
//import { Link } from 'react-router-dom'


const Propositions = ({ propositions }) => {
    
  const propList = propositions.map(proposition => {
    const id = proposition.id;
    return (
      <div className="proposition card" key={id}>
        <div className="card-content">
          <span className="card-title">
          </span>
          <p> userId: { proposition.user_id } </p>
          <p> challengeId: { proposition.challenge_id } </p>
          <p> source: { proposition.source } </p>
          <p> isSolution: { proposition.isSolution } </p>
          <p> distance: { proposition.distance } </p>
          <p> testPassed: { proposition.cantTestPassed }</p>
        </div>
      </div>
    )
  });

  return (
    <div className="post">
      <div className="proposition-list">
        { propList }
      </div>
    </div>
  );
}

export default Propositions