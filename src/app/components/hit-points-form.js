import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

import {language} from '../i18n/language';

export default class HitPointsForm extends Component {
  constructor(props) {
    super(props);
    this.refRank = null;
    this.refDamage = null;
  }

  render() {
    const { hitPoints, onRankChange, onDamageChange, onShowEffects } = this.props;
    var button_label = "+";
    if (hitPoints.effects.length > 0) { button_label = "*";}
    return (
        <Table condensed>
          <thead>
            <tr>
              <td></td><td>Rank</td><td>damage</td><td>actual</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hitPoints.label[language]}</td>
              <td><input
                    type="number"
                    value={hitPoints.rank}
                    ref={ (input) => { this.refRank = input; } }
                    onClick={ () => { this.refRank.select();} }
                    onChange={ () => { onRankChange(this.refRank.value); } }/>
              </td>
              <td><input
                    type="number"
                    value={hitPoints.damage}
                    ref={ (input) => { this.refDamage = input; } }
                    onClick={ () => { this.refDamage.select();} }
                    onChange={ () => { onDamageChange(this.refDamage.value); } }/></td>
              <td>{hitPoints.actual}</td>
              <td><Button bsSize="xsmall" onClick={onShowEffects}>{button_label}</Button></td>
            </tr>
          </tbody>
        </Table>
    );
  }
}
