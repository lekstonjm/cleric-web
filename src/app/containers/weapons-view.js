import React, {Component} from 'react';
import { connect } from 'react-redux';

import WeaponsForm from '../components/weapons-form';
import * as actions from '../actions';

class WeaponsView extends Component {

  render() {
    const { character, onShowWeaponEffectsForm, onRemoveWeapon, onNewWeapon } = this.props;
    return (
      <WeaponsForm weapons={character.attack.weapons}
        onShowWeaponEffectsForm={ (id) => {
            var index = character.attack.weapons.findIndex((item) => { return item.id === id; } );
            onShowWeaponEffectsForm(index)
          }
        }
        onRemoveWeapon={ (id) => { onRemoveWeapon(id); } }
        onNewWeapon={ onNewWeapon }
        />
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    onShowWeaponEffectsForm : (index) => dispatch(actions.hmi.showEffectsForm(['attack','weapons',index])),
    onRemoveWeapon : (id) => dispatch(actions.character.removeWeapon(id)),
    onNewWeapon : () => dispatch(actions.hmi.showNewWeaponForm())
  })
)(WeaponsView);
