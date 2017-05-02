import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

import AttackForm from '../components/attack-form'

class AttackView extends Component {

  render() {
    const { character, onShowBaseEffects, onShowContactEffects, onShowDistantEffects } = this.props;
    return (
      <AttackForm attack={character.attack} onShowBaseEffects={onShowBaseEffects} onShowContactEffects={onShowContactEffects} onShowDistantEffects={onShowDistantEffects}/>
    );
  }
}

export default connect(
  state => ({
    character:state.character
  }),
  (dispatch) => ({
    onShowBaseEffects : { ()=>onShowEffects(['attack']) },
    onShowContactEffects : { ()=>onShowEffects(['attack', 'contact']) },
    onShowDistantEffects : { ()=>onShowEffects(['attack', 'base']) }
  })
)(AttackView);
