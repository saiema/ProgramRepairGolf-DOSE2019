import React from 'react';
import FormProposition from "./FormProposition";
//import { Link } from 'react-router-dom'


const Propositions = ({ propositions }) => {
  const id = propositions.id  
  /*const propList = propositions.map(proposition => {
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
  });*/

  return (
    <div className="proposition card" key={id}>
      <div className="card-content">
        <span className="card-title">  
        </span>
        <p> Id: {propositions.id} </p>
        <p> Usr: {propositions.user_Id} </p>
        <p> Challenge: {propositions.challenge_id} </p>
        <p> Source: {propositions.source} </p>
        <p> isSolution: {propositions.isSolution} </p>
        <p> Distance: {propositions.distance} </p>
        <p> TestPassed: {propositions.cantTestPassed} </p>
      </div>
      <FormProposition code={propositions.source} idProp={propositions.id}/>
    </div>
  );
}

export default Propositions

/*const propList = propositions.map(proposition => {
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
});*/