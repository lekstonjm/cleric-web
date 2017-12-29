import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class NewArmorForm extends Component {
  constructor(props) {
    super(props);
    this.name_input = null;
    this.armor_bonus_input = null;
    this.shield_bonus_input = null;
  }

  render() {
    const { visible, onOk, onCancel } = this.props;
    return (
      <Modal show={visible} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>New Armor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form horizontal>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Name
             </Col>
             <Col sm={6}>
               <FormControl inputRef={ref => { this.name_input = ref; }}  type="text" placeholder="Enter armor name" />
             </Col>
           </FormGroup>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Armor bonus
             </Col>
             <Col sm={6}>
              <FormControl inputRef={ref => { this.armor_bonus_input = ref; }}  type="numeric" placeholder="Enter bonus armor" />
             </Col>
           </FormGroup>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Shield bonus
             </Col>
             <Col sm={6}>
              <FormControl inputRef={ref => { this.shield_bonus_input = ref; }}  type="numeric" placeholder="Enter bonus armor" />
             </Col>
           </FormGroup>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            onOk(this.name_input.value
                , this.armor_bonus_input.value
                , this.shield_bonus_input.value);
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
