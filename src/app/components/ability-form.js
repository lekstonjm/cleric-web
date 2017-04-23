import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

import {language} from '../i18n/language';

export default class AbilityForm extends Component {
  constructor(props) {
    super(props);
    this.refInput = null;
  }

  render() {
    const { ability,  onRankChange, onShowEffects } = this.props;
    var button_label = "+";
    if (ability.effects.length > 0) { button_label = "*";}
    return (
      <tr>
        <td>{ability.label[language]}</td>
        <td><input
              type="number"
              value={ability.rank}
              ref={ (input) => { this.refInput = input; } }
              onClick={ () => { this.refInput.select();} }
              onChange={ (event) => {
                console.log('coucou');
                //onRankChange(event.target.value); 
              } }/>
        </td>
        <td>{ability.actual}</td>
        <td>{ability.modifier}</td>
        <td><Button bsSize="xsmall" onClick={onShowEffects}>{button_label}</Button></td>
      </tr>
    );
  }
}
