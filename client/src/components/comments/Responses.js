import React from 'react'



const Responses = ({ responses, id, user_id, deleteResponse }) => {
 let result = [];
 Object.values(responses).forEach(item => {
    if(item === responses[id]){
     result = result.concat(item);
    }
 })

    const responsesList = Object.keys(result).map((key, index) => {
      const res = result[key];
      return (
        <div className="commmentSeccion" key={key}>
          <div className="reply">
            <p className="title">Re: {res.username} </p>
            <p className="description">{ res.description }</p>
            {user_id === res.user_id ?(
                <div>
                  <button className= "button-submit" onClick={()=>deleteResponse(res.id)}> Delete </button>
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
