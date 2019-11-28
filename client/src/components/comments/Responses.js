import React from 'react'
import { Link } from 'react-router-dom'


const Responses = ({ responses }) => {
  console.log(responses);
    const responsesList = responses.map(responses => {
      const id = responses.id;
      return (
        <div className="responses card" key={id}>
          <div className="card-content">
            <p>description: { responses.description }</p>
          </div>
        </div>
      )
    });

    return (
      <div className="post">
        <div className="responses-list">
          { responsesList }
        </div>
      </div>
    );
  }

  export default Responses
