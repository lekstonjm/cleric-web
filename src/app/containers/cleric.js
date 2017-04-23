import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Jumbotron, PageHeader, Button} from 'react-bootstrap';

import {language} from '../i18n/language';
import * as actions from '../actions';
import SkillView from '../components/skill-view'
import SkillsView from '../components/skills-view'
import NewSkillView from '../containers/new-skill-view'
import EffectsView from '../containers/effects-view'
import AbilitiesView from '../containers/abilities-view'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {
  constructor(props) {
    super(props);
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
            <AbilitiesView/>
          </Col>
          <Col lg={6}>
            <SkillsView showNewSkillForm={showNewSkillForm}>
              { this.renderSkills(character.skills, changeSkillRank) }
            </SkillsView>
          </Col>
        </Row>
        <NewSkillView/>
        <EffectsView/>
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
