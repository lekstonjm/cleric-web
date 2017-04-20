import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class SkillsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {showNewSkillForm ,children} = this.props;
    return (
      <div className="skills">
        <h1>Skills</h1><Button onClick={showNewSkillForm}>New skill</Button>
        <table>
            <thead>
              <tr><td>&nbsp;</td><td>Rk</td><td>Act</td></tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
      </div>
   );
  }
}
