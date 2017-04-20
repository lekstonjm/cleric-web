import React, {Component} from 'react';

export default class AbilitiesView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {children} = this.props;
    return (
      <div className="abilities">
        <h1>Abilities</h1>
        <table>
              <thead>
                <tr><td>&nbsp;</td><td>Rk</td><td>Act</td><td>Mod</td></tr>
              </thead>
              <tbody>
              {children}
              </tbody>
        </table>
      </div>
   );
  }
}
