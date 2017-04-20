import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import {language} from '../i18n/language';

class NewSkillForm extends Component {
  constructor(props) {
    super(props);
    this.label_input = null;
    this.ability_input = null;
  }

  render() {
    const { hmi, newSkill, hideNewSkillForm } = this.props;
    return (
      <Modal show={hmi.new_skill_form_visible} onHide={hideNewSkillForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form horizontal>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={2}>
               Label
             </Col>
             <Col sm={10}>
               <FormControl inputRef={ref => { this.label_input = ref; }}  type="text" placeholder="Enter the skill name" />
             </Col>
           </FormGroup>

           <FormGroup>
             <Col componentClass={ControlLabel} sm={2}>
               Ability
             </Col>
             <Col sm={10}>
               <FormControl inputRef={ref => { this.ability_input = ref; }} type="text" placeholder="Enter the ability" />
             </Col>
           </FormGroup>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            newSkill(this.label_input.value, this.ability_input.value);
            hideNewSkillForm();
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(state => ({
    hmi : state.hmi
  }),
  (dispatch) => ({
    newSkill: (label, ability) => dispatch(actions.character.newSkill(label, ability)),
    hideNewSkillForm: () => dispatch(actions.hmi.hideNewSkillForm()),
  })
)(NewSkillForm);
