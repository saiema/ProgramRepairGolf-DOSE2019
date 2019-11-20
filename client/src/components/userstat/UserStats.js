import React from 'react'

const Ranking = (props) => {
    return (
        <div>
        <div className="left">
            <IndividualStats user='30'/>
        </div>
        <div className="right">
            <Ranking />
        </div>
        </div>
    )
}

export default Ranking