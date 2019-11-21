import React from 'react'

const AllCompilationChallenge = ({ allCompilationChallenge }) => {

  const allCompilationChallengeList = allCompilationChallenge.map(challenge => {
    return (
      <div>
        <p key = {challenge.id} >{challenge.title}</p>
      </div>
    )
  });

  return (
      <div>
          <p> all compilation challenge </p>
          { allCompilationChallengeList }
      </div>
    )
}

export default AllCompilationChallenge