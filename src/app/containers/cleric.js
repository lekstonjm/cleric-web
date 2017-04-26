import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Jumbotron, PageHeader, Button} from 'react-bootstrap';

import {language} from '../i18n/language';
import * as actions from '../actions';

import LevelView from '../containers/level-view'
import NewSkillView from '../containers/new-skill-view'
import EffectsView from '../containers/effects-view'
import AbilitiesView from '../containers/abilities-view'
import SkillsView from '../containers/skills-view'
import HitPointsView from '../containers/hit-points-view'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader>Calculatrice à PJ <LevelView/></PageHeader>
        <Grid>
          <Row>
            <Col lg={4}>
              <AbilitiesView/>
              <HitPointsView/>
            </Col>
            <Col lg={4}>
              &nbsp;
            </Col>
            <Col lg={4}>
              <SkillsView/>
            </Col>
          </Row>
          <NewSkillView/>
          <EffectsView/>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({}),(dispatch) => ({}))(Cleric);
