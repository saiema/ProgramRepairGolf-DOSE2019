import React from 'react';
import './Style.css';
import Modal from './Modal/Modal';

const TableTestChallengeModify = ({ listTestChallenge, props }) => {
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
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
         <button className="button-table" onClick={props.openModalHandler}> VIEW TEST </button>
          { props.state.isShowing ? 
          <div> 
            <Modal
              className="modal"
              name = "Test"
              show={props.state.isShowing}
              close={props.closeModalHandler}>
              {challenge.test}
            </Modal>
          </div>
           : null}
          <button className="button-table"> MODIFY </button>
        </td>
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
          { testChallengeList }
        </tbody>
      </table>
    </div>
  )
}

export default TableTestChallengeModify;