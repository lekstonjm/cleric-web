import React, {Component} from 'react';
import {Modal, Button, ListGroup, ListGroupItem, Form, FormGroup, FormControl, Coll} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import {language} from '../i18n/language';

class EffectsForm extends Component {
  constructor(props) {
    super(props);
    this.desciption_input = null;
  }

  renderEffects(effects) {
      return Object.keys(effects).map( (effect) => {
        return (
          <ListGroupItem>{effects[effect].description}</ListGroupItem>
        );
      });
  }

  render() {
    const { hmi, character, hideEffectsForm } = this.props;
    var items = "";
    console.log(hmi.effects_form_visible+' '+hmi.effect_form_ability);
    if (hmi.effects_form_visible) {
      var effects = character.abilities[hmi.effect_form_ability].effects;
      items = this.renderEffects(effects)
    }
    return (
      <Modal show={hmi.effects_form_visible} onHide={hideEffectsForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>{items}</ListGroup>
          <Form inline>
            <FormGroup>
              <FormControl type="text" placeholder="Effect description" />
            </FormGroup>
            <FormGroup>
              <FormControl type="numeric" placeholder="+/- effect" />
            </FormGroup>
            <Button type="submit">
              ADD
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            hideEffectsForm();
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(state => ({
    hmi : state.hmi,
    character : state.character
  }),
  (dispatch) => ({
    hideEffectsForm: () => dispatch(actions.hmi.hideEffectsForm()),
  })
)(EffectsForm);
