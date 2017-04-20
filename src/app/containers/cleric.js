import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Jumbotron, PageHeader, Button} from 'react-bootstrap';

import {language} from '../i18n/language';
import * as actions from '../actions';
import AbilityView from '../components/ability-view'
import AbilitiesView from '../components/abilities-view'
import SkillView from '../components/skill-view'
import SkillsView from '../components/skills-view'
//import NewSkillForm from '../components/new-skill-form'
import NewSkillForm from '../containers/new-skill-form'
import EffectsForm from '../containers/effects-form'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {
  constructor(props) {
    super(props);
  }

  renderAbilities(abilities, changeAbilityRank, showEffects) {
    return Object.keys(abilities).map( (ability) => {
      return (
        <AbilityView key={ability}
          ability={abilities[ability]}
          changeRank={ (new_rank) => changeAbilityRank(ability, new_rank) }
          showEffects={ () => showEffects(ability) }
          />
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
        <SkillView key={skills[skill].id} skill={skills[skill]}
          changeRank={ (new_rank) => changeSkillRank(skills[skill].id, new_rank) }/>
      );
    });
  }
  render() {
    const { character, resetCharacter, changeAbilityRank, changeSkillRank, showNewSkillForm, showEffectsForm  } = this.props;
    return (
      <Grid>
        <Row>
          <PageHeader className="title">Cleric</PageHeader>
        </Row>
        <Row>
          <Col lg={6}>
            <AbilitiesView>
              { this.renderAbilities(character.abilities, changeAbilityRank, showEffectsForm) }
            </AbilitiesView>
          </Col>
          <Col lg={6}>
            <SkillsView showNewSkillForm={showNewSkillForm}>
              { this.renderSkills(character.skills, changeSkillRank) }
            </SkillsView>
          </Col>
        </Row>
        <NewSkillForm/>
        <EffectsForm/>
      </Grid>
    );
  }
}

export default connect(state => ({
    character : state.character
  }),
  (dispatch) => ({
    resetCharacter : () => dispatch(actions.character.resetCharacter()),
    changeAbilityRank : (ability_name, new_rank) => dispatch(actions.character.changeAbilityRank(ability_name, new_rank)),
    changeSkillRank : (skill_name, new_rank) => dispatch(actions.character.changeSkillRank(skill_name, new_rank)),
    showNewSkillForm: () => dispatch(actions.hmi.showNewSkillForm()),
    showEffectsForm: (ability_name) => dispatch(actions.hmi.showEffectsForm(ability_name))
  })
)(Cleric);
