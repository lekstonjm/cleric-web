import React, {Component} from 'react';
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
      <div>
        <h1>Abilities</h1>
        <table>
              <thead>
                <tr><td>&nbsp;</td><td>Rk</td><td>Act</td><td>Mod</td></tr>
              </thead>
              <tbody>
              { this.renderAbilities(abilities, onAbilityRankChange, onShowAbilityEffects) }
              </tbody>
        </table>
      </div>
   );
  }
}
