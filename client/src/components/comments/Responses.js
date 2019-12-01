import React from 'react'



const Responses = ({ responses, id, user_id, deleteResponse }) => {
  console.log(responses);
  console.log(id);
 let result = [];
 Object.values(responses).forEach(item => {
   console.log(item === responses[id]);
    if(item === responses[id]){
     result = result.concat(item);
    }
 }) 
 
    const responsesList = Object.keys(result).map((key, index) => {
      const res = result[key];
      console.log(res);
      return (
        <div className="responses card" key={key}>
          <div className="card-content">
            <p>Re: {res.username} </p>
            <p>description: { res.description }</p>
            {user_id === res.user_id ?(
                <div>
                  <button onClick={()=>deleteResponse(res.id)}> Delete </button>
                </div>
            ):(
                <div>
                </div>
            )} 
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
