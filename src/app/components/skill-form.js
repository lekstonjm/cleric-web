import React, {Component} from 'react';
import {language} from '../i18n/language';

export default class SkillForm extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }

  render() {
    const { skill, onRankChange } = this.props;
    return (
      <tr>
        <td className=".label">{skill.label[language]}</td>
        <td><input
              type="number"
              value={skill.rank}
              ref={ (input) => { this.refInput = input; } }
              onClick={ () => { this.refInput.select();} }
              onChange={ (event) => {  onRankChange(event.target.value); } }/>
        </td>
        <td>{skill.actual}</td>
      </tr>
    );
  }
}
