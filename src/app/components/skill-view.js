import React, {Component} from 'react';
import {language} from '../i18n/language';

export default class SkillView extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }

  render() {
    const { name, label, rank, actual } = this.props;
    return (
      <tr>
        <td>{label}</td>
        <td>{rank}</td>
        <td>{actual}</td>
      </tr>
    );
  }
}
