import React from 'react'

const TableTestChallenge = ({ listTestChallenge }) => {
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <div key = {challenge.id} >
        <table>
          <tbody>
              <tr>
                <td>{challenge.id}</td>
                <td>{challenge.title}</td>
                <td>{challenge.class_name}</td>
                <td>{challenge.description}</td>
                <td>{challenge.source}</td>            
                <td>{challenge.point}</td>
                <td>{challenge.id_test}</td>
                <td>{challenge.test}</td>
              </tr>
            </tbody>
        </table>
      </div>
    )
  });

  return (
    <div>
        <table>
          <tbody>
            <tr>
              <th>Identifier</th>
              <th>Title</th>
              <th>Class name</th>
              <th>Description</th>
              <th>Source</th>
              <th>Points</th>
              <th>Identifier test</th>
              <th>Test</th>
            </tr> 
          </tbody>
        </table>
        { testChallengeList }
    </div>
  )
}

export default TableTestChallenge