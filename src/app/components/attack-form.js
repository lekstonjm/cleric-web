import React, {Component} from 'react';
import { Table, Button } from 'react-bootstrap';

import {language} from '../i18n/language';

export default class AttackForm extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }
  renderActual(actual_base, actual_typed) {
    var number = actual_base / 5;
    var result = "";
    for (var index = 0; index < number; index++) {
      if (index > 0) {
        result += " / ";
      }
      result += actual_typed - index * 5;
    }
    return result;
  }
  render() {
    const { attack, onRankChange, onShowBaseEffects, onShowContactEffects, onShowDistantEffects } = this.props;
    var button_base_label = "+";
    if (attack.base.effects.length > 0) { button_base_label = "*";}
    var button_contact_label = "+";
    if (attack.contact.effects.length > 0) { button_contact_label = "*";}
    var button_distant_label = "+";
    if (attack.distant.effects.length > 0) { button_distant_label = "*";}
    return (
      <Table condensed>
        <thead>
          <tr><td>{attack.label[language]}</td><td>Rank</td><td>Actual</td></tr>
        </thead>
        <tbody>
          <tr>
            <td>{attack.base.label[language]}</td>
            <td><input
                  type="number"
                  value={attack.base.rank}
                  ref={ (input) => { this.refInput = input; } }
                  onClick={ () => { this.refInput.select();} }
                  onChange={ () => { onRankChange(this.refInput.value); } }/>
            </td>
            <td>{attack.base.actual}</td>
            <td><Button bsSize="xsmall" onClick={onShowBaseEffects}>{button_base_label}</Button></td>
          </tr>
          <tr>
            <td>{attack.contact.label[language]}</td>
            <td></td>
            <td>{this.renderActual(attack.base.actual, attack.contact.actual)}</td>
            <td><Button bsSize="xsmall" onClick={onShowContactEffects}>{button_contact_label}</Button></td>
          </tr>
          <tr>
            <td>{attack.distant.label[language]}</td>
            <td></td>
            <td>{this.renderActual(attack.base.actual, attack.distant.actual)}</td>
            <td><Button bsSize="xsmall" onClick={onShowDistantEffects}>{button_distant_label}</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
