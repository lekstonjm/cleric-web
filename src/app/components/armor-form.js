import React, {Component} from 'react';
import {Button} from 'react-bootstrap'

export default class ArmorForm extends Component {
  render() {
    const { armor, onShowEffectsForm, onRemove } = this.props;
    var button_label = "+";
    if (armor.effects.length > 0) { button_label = "*";}
    return (
      <tr>
        <td><Button  bsSize="xsmall" onClick={onRemove}>-</Button></td>
        <td>{armor.name}</td>
        <td>{armor.actual}</td>
        <td>{armor.surprised}</td>
        <td><checkbox></checkbox></td>
        <td><Button  bsSize="xsmall" onClick={onShowEffectsForm}>{button_label}</Button></td>
      </tr>
    );
  }
}
