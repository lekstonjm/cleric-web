import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import WeaponForm from './weapon-form';

export default class WeaponsForm extends Component {

  renderWeapons(weapons, onShowWeaponEffectsForm, onRemoveWeapon) {
    return Object.keys(weapons).map( (weapon_index) => {
      var id = weapons[weapon_index].id;
      return (<WeaponForm key={id}
                weapon={weapons[weapon_index]}
                onShowEffectsForm={ () => onShowWeaponEffectsForm(id) }
                onRemove={ () => onRemoveWeapon(id) }
                />);
    });
  }

  render() {
    const { weapons, onShowWeaponEffectsForm, onRemoveWeapon, onNewWeapon } = this.props;
    return (
      <Table condensed>
          <thead>
            <tr><td></td><td>Weapons <Button bsSize="xsmall" onClick={onNewWeapon}>+</Button></td><td>Touch</td><td>Damage</td><td></td></tr>
          </thead>
          <tbody>
          { this.renderWeapons(weapons, onShowWeaponEffectsForm, onRemoveWeapon) }
          </tbody>
      </Table>
   );
  }
}
