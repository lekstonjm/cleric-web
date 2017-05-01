import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import NewSkillForm from '../components/new-skill-form';

class NewSkillView extends Component {

  render() {
    const { hmi, newSkill, hideNewSkillForm } = this.props;
    return (
      <NewSkillForm visible={hmi.new_skill_form.visible} onOk={(label, ability)=>{newSkill(label, ability); hideNewSkillForm();}} onCancel={hideNewSkillForm}/>
    );
  }
}

export default connect(state => ({
    hmi : state.hmi
  }),
  (dispatch) => ({
    newSkill: (label, ability) => dispatch(actions.character.newSkill(label, ability)),
    hideNewSkillForm: () => dispatch(actions.hmi.hideNewSkillForm()),
  })
)(NewSkillView);
