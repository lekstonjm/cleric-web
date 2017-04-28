import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import {language} from '../i18n/language';

export default class SavingThrowsForm extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }

  render() {
    const { saving,  onRankChange, onShowEffects } = this.props;
    var button_label = "+";
    if (saving.effects.length > 0) { button_label = "*";}
    return (
      <tr>
        <td>{saving.label[language]}</td>
        <td><input
              type="number"
              value={saving.rank}
              ref={ (input) => { this.refInput = input; } }
              onClick={ () => { this.refInput.select();} }
              onChange={ () => { onRankChange(this.refInput.value); } }/>
        </td>
        <td>{saving.actual}</td>
        <td><Button bsSize="xsmall" onClick={onShowEffects}>{button_label}</Button></td>
      </tr>
    );
  }
}
