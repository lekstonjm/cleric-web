import React, {Component} from 'react';
import { connect } from 'react-redux';

import SkillsForm from '../components/skills-form';
import * as actions from '../actions';

class SkillsView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skills, changeSkillRank } = this.props;
    return (
      <SkillsForm abilities={abilities}
        onSkillRankChanged={ (ability_id, new_rank) => changeSkillRank(skill_id, new_rank) } />
    );
  }
}

export default connect(state => ({
    skills : state.character.skills
  }),
  (dispatch) => ({
    changeSkillsRank : (ability_name, new_rank) => dispatch(actions.character.changeAbilityRank(ability_name, new_rank))
  })
)(SkillsView);
