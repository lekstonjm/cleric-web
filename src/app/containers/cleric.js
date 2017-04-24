import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col, Jumbotron, PageHeader, Button} from 'react-bootstrap';

import {language} from '../i18n/language';
import * as actions from '../actions';

import NewSkillView from '../containers/new-skill-view'
import EffectsView from '../containers/effects-view'
import AbilitiesView from '../containers/abilities-view'
import SkillsView from '../containers/skills-view'
// @connect(state => ({
//   state: state.counter
// }))
class Cleric extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <SkillsView/>
          </Col>
        </Row>
        <NewSkillView/>
        <EffectsView/>
      </Grid>
    );
  }
}

export default connect(state => ({}),(dispatch) => ({}))(Cleric);
