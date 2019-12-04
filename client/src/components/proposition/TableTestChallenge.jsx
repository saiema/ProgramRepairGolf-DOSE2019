import React, { Component } from "react";
import { Button } from "reactstrap";

/**
 * It allows you to list all the test type challenges and select one to play.
 */
class TableTestChallenge extends Component {
  render() {
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
            {this.props.listTestChallenge.map(challenge => (
              <tr key={challenge.id}>
                <td>{challenge.id}</td>
                <td>{challenge.title}</td>
                <td>{challenge.description}</td>
                <td>{challenge.point}</td>
                <td>
                  <Button
                    className="button-group"
                    onClick={this.props.onClickChangeState(
                      challenge.id,
                      challenge.description,
                      true
                    )}
                  >
                    Play
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableTestChallenge;
