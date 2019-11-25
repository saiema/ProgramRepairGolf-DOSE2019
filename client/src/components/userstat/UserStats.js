import React from 'react'
import RankingContainer from './RankingContainer'
import IndividualStatsContainer from './IndividualStatsContainer'

const UserStat = (props) => {
    return (
        <div>
        <div className="left">
            <IndividualStatsContainer />
        </div>
        <div className="right">
            <RankingContainer />
        </div>
        </div>
    )
}

export default UserStat
