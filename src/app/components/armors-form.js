import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import ArmorForm from './armor-form';

export default class ArmorsForm extends Component {

  renderArmors(armors, onShowArmorEffectsForm, onRemoveArmor) {
    return Object.keys(armors).map( (armor_index) => {
      var id = armors[armor_index].id;
      return (<ArmorForm key={id}
                armor={armors[armor_index]}
                onShowEffectsForm={ () => onShowArmorEffectsForm(id) }
                onRemove={ () => onRemoveArmor(id) }
                />);
    });
  }

  render() {
    const { armors, onShowArmorEffectsForm, onRemoveArmor, onNewArmor } = this.props;
    return (
      <Table condensed>
          <thead>
            <tr><td></td><td>Armors <Button bsSize="xsmall" onClick={onNewArmor}>+</Button></td><td>CA</td><td>Suprise</td><td>Shield</td></tr>
          </thead>
          <tbody>
          { this.renderArmors(armors, onShowArmorEffectsForm, onRemoveArmor) }
          </tbody>
      </Table>
   );
  }
}
