import React, { Component } from "react";
import { Button } from "reactstrap";

/**
 * Allows you to list all the compilation type challenges select one to play.
 */
class TableCompilationChallenge extends Component {
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
            {this.props.listCompilationChallenge.map(challenge => (
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
                      challenge.description
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

export default TableCompilationChallenge;
