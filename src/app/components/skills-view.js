import React, {Component} from 'react';

export default class SkillsView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {children} = this.props;
    return (
      <div className="block">
        <h1>Skills</h1>
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
