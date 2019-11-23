import React from 'react'

const TableTestChallenge = ({ listTestChallenge }) => {
  console.log("ueeep tc")
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <div >
        <table>
          <tr>
            <td>{challenge.id}</td>
            <td>{challenge.title}</td>
            <td>{challenge.class_name}</td>
            <td>{challenge.description}</td>
            <td>{challenge.source}</td>            
            <td>{challenge.point}</td>
            <td>{challenge.test}</td>
          </tr>
        </table>
      </div>
    )
  });

  return (
    <div>
        <table>
          {/* <tr>
            <th>Identifier</th>
            <th>Title</th>
            <th>Class name</th>
            <th>Description</th>
            <th>Source</th>
            <th>Points</th>
            <th>Test</th>
          </tr> */}
        </table>
        { testChallengeList }
    </div>
  )
}

export default TableTestChallenge