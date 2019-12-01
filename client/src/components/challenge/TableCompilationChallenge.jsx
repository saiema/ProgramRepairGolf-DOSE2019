import React from 'react';
import './Style.css';
import Modal from './Modal/Modal';

const TableCompilationChallenge = ({ listCompilationChallenge, props}) => {
  const compilationChallengeList = listCompilationChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <button className="button-table" onClick={props.openModalHandler}> VIEW SOURCE </button>
          { props.state.isShowing ? 
          <div> 
            <Modal
              className="modal"
              name = "Source"
              show={props.state.isShowing}
              close={props.closeModalHandler}>
              {challenge.source}
            </Modal>
          </div>
           : null}
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