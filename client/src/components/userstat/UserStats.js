import React from 'react'
import RankingContainer from './RankingContainer'
import IndividualStatsContainer from './IndividualStatsContainer'
import style from './style.css'

const UserStat = (props) => {
    return (
        <div>
            <div class="left">
                <IndividualStatsContainer />
            </div>
            <div class="right">
                <RankingContainer />
            </div>
        </div>
    )
}

export default UserStat
