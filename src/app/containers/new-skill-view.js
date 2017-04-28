import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {language} from '../i18n/language';
import NewSkillForm from '../components/new-skill-form';

class NewSkillView extends Component {
  constructor(props) {
    super(props);
  }

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
