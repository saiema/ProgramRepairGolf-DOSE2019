import React from 'react'
import { Link } from 'react-router-dom'


const Responses = ({ responses, id }) => {
  console.log(responses);

  console.log(responses[id]);
  console.log(id);
 let result = [];
 Object.values(responses).forEach(item => {
   console.log(item === responses[id]);
    if(item === responses[id]){
     result = result.concat(item);
    }
 }) 
 
// const a=responses.forEach(element => 
//   console.log(element)
// );

  //const responsesList = 2;
    const responsesList = Object.keys(result).map((key, index) => {
      const res = result[key];
      console.log(res);
      return (
        <div className="responses card" key={key}>
          <div className="card-content">
            <p>Re: {res.username} </p>
            <p>description: { res.description }</p>
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
