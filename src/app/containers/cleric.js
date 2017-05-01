import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';

import LevelView from '../containers/level-view'
import NewSkillView from '../containers/new-skill-view'
import EffectsView from '../containers/effects-view'
import AbilitiesView from '../containers/abilities-view'
import SkillsView from '../containers/skills-view'
import HitPointsView from '../containers/hit-points-view'
import SavingThrowsView from '../containers/saving-throws-view'
import ArmorClassView from '../containers/armor-class-view'
import InitiativeView from '../containers/initiative-view'
import SizeView from '../containers/size-view'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {

  render() {
    return (
      <div>
        <PageHeader>Calculatrice à PJ</PageHeader>
        <Grid>
          <Row>
            <Col lg={4}>
              <LevelView/>
              <SizeView/>
              <AbilitiesView/>
              <HitPointsView/>
              <SavingThrowsView/>
            </Col>
            <Col lg={4}>
              <ArmorClassView/>
              <InitiativeView/>
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
