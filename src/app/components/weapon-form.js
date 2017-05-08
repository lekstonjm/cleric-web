import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

export default class WeaponForm extends Component {
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
    const { weapon, onShowEffectsForm, onRemove } = this.props;
    var button_label = "+";
    if (weapon.effects.length > 0) { button_label = "*";}
    return (
      <tr>
        <td><Button  bsSize="xsmall" onClick={onRemove}>-</Button></td>
        <td>{weapon.name}</td>
        <td>{this.renderActual(weapon.touch.base, weapon.touch.actual)}</td>
        <td>{weapon.damage.actual}</td>
        <td><Button  bsSize="xsmall" onClick={onShowEffectsForm}>{button_label}</Button></td>
      </tr>
    );
  }
}
