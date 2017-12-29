import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import NewArmorForm from '../components/new-armor-form';

class NewArmorView extends Component {

  render() {
    const { hmi, onNew, onHide } = this.props;
    return (
      <NewArmorForm visible={hmi.new_armor_form.visible}
        onOk={(name, armor_bonus, shield_bonus)=>{onNew(name, armor_bonus, shield_bonus); onHide();}}
        onCancel={onHide}/>
    );
  }
}

export default connect(state => ({
    hmi : state.hmi
  }),
  (dispatch) => ({
    onNew: (name, armor_bonus, shield_bonus) => dispatch(actions.character.newArmor(name, armor_bonus, shield_bonus)),
    onHide: () => dispatch(actions.hmi.hideNewArmorForm())
  })
)(NewArmorView);
