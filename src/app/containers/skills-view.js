import React, {Component} from 'react';
import { connect } from 'react-redux';

import SkillsForm from '../components/skills-form';
import * as actions from '../actions';

class SkillsView extends Component {

  render() {
    const { character, onRankChange, onNewSkill } = this.props;
    return (
      <SkillsForm skills={character.skills}
        onRankChange={ onRankChange }
        onNewSkill={ onNewSkill } />
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    onRankChange : (skill_id, new_rank) => dispatch(actions.character.changeSkillRank(skill_id, new_rank)),
    onNewSkill : () => dispatch(actions.hmi.showNewSkillForm())
  })
)(SkillsView);
