import React, {Component} from 'react';
import { connect } from 'react-redux';

import ArmorsForm from '../components/armors-form';
import * as actions from '../actions';

class ArmorsView extends Component {

  render() {
    const { character, onShowArmorEffectsForm, onRemoveArmor, onNewArmor } = this.props;

    return (
      <ArmorsForm armors={character.armors}
        onShowArmorEffectsForm={ (id) => {
            var index = character.armors.findIndex((item) => { return item.id === id; } );
            onShowArmorEffectsForm(index)
          }
        }
        onRemoveArmor={ (id) => { onRemoveArmor(id); } }
        onNewArmor={ onNewArmor }
        />
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    onShowArmorEffectsForm : (index) => dispatch(actions.hmi.showEffectsForm(['armor_class','armors',index])),
    onRemoveArmor : (id) => dispatch(actions.character.removeArmor(id)),
    onNewArmor : () => dispatch(actions.hmi.showNewArmorForm())
  })
)(ArmorsView);
