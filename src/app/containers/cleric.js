import React, {Component} from 'react';
import * as actions from '../actions/character-actions';
import { connect } from 'react-redux';
import {language} from '../i18n/language';
import AbilityView from '../components/ability-view'
import AbilitiesView from '../components/abilities-view'
import SkillView from '../components/skill-view'
import SkillsView from '../components/skills-view'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {
  constructor(props) {
    super(props);
  }
  renderAbilities(abilities, changeAbilityRank) {
    return Object.keys(abilities).map( (ability) => {
      return (
        <AbilityView key={ability}
          label={abilities[ability].label[language]}
          rank={abilities[ability].rank}
          actual={abilities[ability].actual}
          modifier={abilities[ability].modifier}
          changeRank={ (new_rank) => changeAbilityRank(ability, new_rank) }/>
      );
    });
  }
  renderSkills(skills, changeSkillRank) {
    return Object.keys(skills).map( (skill) => {
      return (
        <SkillView key={skill}
          label={skills[skill].label[language]}
          rank={skills[skill].rank}
          actual={skills[skill].actual}
          changeRank={ (new_rank) => changeSkillRank(skill, new_rank) }/>
      );
    });
  }
  render() {
    const { character, resetCharacter, changeAbilityRank, changeSkillRank } = this.props;
    return (
      <div className="row">
        <AbilitiesView>
          { this.renderAbilities(character.abilities, changeAbilityRank) }
        </AbilitiesView>
        <SkillsView>
          { this.renderSkills(character.skills, changeSkillRank) }
        </SkillsView>
      </div>
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    resetCharacter : () => dispatch(actions.resetCharacter()),
    changeAbilityRank : (ability_name, new_rank) => dispatch(actions.changeAbilityRank(ability_name, new_rank)),
    changeSkillRank : (skill_name, new_rank) => dispatch(actions.changeSkillRank(skill_name, new_rank))
  })
)(Cleric);
