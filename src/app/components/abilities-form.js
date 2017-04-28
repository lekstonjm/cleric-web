import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import AbilityForm from './ability-form';

export default class AbilitiesForm extends Component {
  constructor(props) {
    super(props);
  }

  renderAbilities(abilities, onAbilityRankChange, onShowAbilityEffects) {
    return Object.keys(abilities).map( (ability_name) => {
      return (
        <AbilityForm key={ability_name}
          ability={abilities[ability_name]}
          onRankChange={ (new_rank) => { console.log('test'); onAbilityRankChange(ability_name, new_rank);} }
          onShowEffects={ () => onShowAbilityEffects(ability_name) }
          />
      );
    });
  }

  render() {
    const {abilities, onAbilityRankChange, onShowAbilityEffects} = this.props;
    return (
        <Table condensed>
              <thead>
                <tr><td></td><td>Rank</td><td>Actual</td><td>Modifier</td></tr>
              </thead>
              <tbody>
              { this.renderAbilities(abilities, onAbilityRankChange, onShowAbilityEffects) }
              </tbody>
        </Table>
   );
  }
}
