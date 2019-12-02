import React from 'react';
import './Style.css';
import useModal from 'use-react-modal'
import ViewModal from './ViewModal'
import { Link } from 'react-router-dom';

const TableCompilationChallenge = ({ listCompilationChallenge, showStatsHandler }) => {
  const { openModal, isOpen } = useModal()
  const compilationChallengeList = listCompilationChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
          <button className="button-table" onClick={(e) => openModal(e)}> VIEW SOURCE </button>
          {isOpen && (
            <ViewModal
              title = "SOURCE CODE"
              text = {challenge.source}
            />
          )}
        </td>
        <td> <button className="button-table"> VIEW SOURCE </button></td>

        <td> <button onClick={showStatsHandler(challenge.id)}> STATS </button> </td>

        <td> <Link to={'challenges_comments/'+challenge.id}> VIEW COMMENTS </Link></td>
      </tr>
    )
  });
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
          { compilationChallengeList }
        </tbody>
      </table>
    </div>
  )
}

export default TableCompilationChallenge;
