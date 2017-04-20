import React, {Component} from 'react';
import * as actions from '../actions/character-actions';
import { connect } from 'react-redux';
import {language} from '../i18n/language';
import AbilityView from '../components/ability-view'
import AbilitiesView from '../components/abilities-view'
import SkillView from '../components/skill-view'
import SkillsView from '../components/skills-view'
import NewSkillView from '../components/new-skill-view'
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
    var sort_fn = (skill_1, skill_2) => {
      if (skill_1.label[language] < skill_2.label[language]) {
        return -1;
      } else if (skill_1.label[language] > skill_2.label[language]) {
        return 1;
      } else {
        return 0;
      }
    };
    skills.sort(sort_fn);
    return Object.keys(skills).map( (skill) => {
      return (
        <SkillView key={skills[skill].id}
          label={skills[skill].label[language]}
          rank={skills[skill].rank}
          actual={skills[skill].actual}
          changeRank={ (new_rank) => changeSkillRank(skills[skill].id, new_rank) }/>
      );
    });
  }
  render() {
    const { character, resetCharacter, changeAbilityRank, changeSkillRank, newSkill } = this.props;
    return (
      <div className="row">
        <div className="block">
          <AbilitiesView>
            { this.renderAbilities(character.abilities, changeAbilityRank) }
          </AbilitiesView>
        </div>
        <div className="block">
          <SkillsView>
            { this.renderSkills(character.skills, changeSkillRank) }
          </SkillsView>
          <NewSkillView onNew={newSkill}/>
        </div>
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
    changeSkillRank : (skill_name, new_rank) => dispatch(actions.changeSkillRank(skill_name, new_rank)),
    newSkill: (skill_name, label, ability) => dispatch(actions.newSkill(skill_name, label, ability))
  })
)(Cleric);
