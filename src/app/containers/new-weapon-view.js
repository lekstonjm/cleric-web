import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import NewWeaponForm from '../components/new-weapon-form';

class NewWeaponView extends Component {

  render() {
    const { hmi, onNew, onHide } = this.props;
    return (
      <NewWeaponForm visible={hmi.new_weapon_form.visible}
        onOk={(name, type, damage)=>{onNew(name, type, damage); onHide();}}
        onCancel={onHide}/>
    );
  }
}

export default connect(state => ({
    hmi : state.hmi
  }),
  (dispatch) => ({
    onNew: (name, type, damage) => dispatch(actions.character.newWeapon(name, type, damage)),
    onHide: () => dispatch(actions.hmi.hideNewWeaponForm())
  })
)(NewWeaponView);
