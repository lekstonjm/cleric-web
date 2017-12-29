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
import InitiativeView from '../containers/initiative-view'
import ArmorClassView from '../containers/armor-class-view'
import ArmorsView from '../containers/armors-view'
import NewArmorView from '../containers/new-armor-view'
import SizeView from '../containers/size-view'
import AttackView from '../containers/attack-view'
import WeaponsView from '../containers/weapons-view'
import NewWeaponView from '../containers/new-weapon-view'
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
              <InitiativeView/>
            </Col>
            <Col lg={5}>
              <ArmorClassView/>
              <ArmorsView/>
              <AttackView/>
              <WeaponsView/>
            </Col>
            <Col lg={3}>
              <SkillsView/>
            </Col>
          </Row>
          <NewSkillView/>
          <EffectsView/>
          <NewWeaponView/>
          <NewArmorView/>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({}),(dispatch) => ({}))(Cleric);
