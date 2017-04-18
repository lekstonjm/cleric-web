import React, {Component} from 'react';
import {language} from '../i18n/language';

export default class SkillView extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }

  render() {
    const { label, rank, actual, changeRank } = this.props;
    return (
      <tr>
        <td>{label}</td>
        <td><input
              type="number"
              value={rank}
              ref={ (input) => { this.refInput = input; } }
              onClick={ () => { this.refInput.select();} }
              onChange={ (event) => {  changeRank(event.target.value); } }/>
        </td>
        <td>{actual}</td>
      </tr>
    );
  }
}
