import React from 'react'

const TableTestChallenge = ({ listTestChallenge }) => {
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
          <button>
            View
          </button>
          <button>
            Modify
          </button>
          <button>
            Delete
          </button>
        </td>
      </tr>
    )
  });

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Identifier</th>
            <th>Title</th>
            <th>Description</th>
            <th>Points</th>
            <th>Actions</th>
          </tr> 
          { testChallengeList }
        </tbody>
      </table>
    </div>
  )
}

export default TableTestChallenge