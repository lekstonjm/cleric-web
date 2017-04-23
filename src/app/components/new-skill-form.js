import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class NewSkillForm extends Component {
  constructor(props) {
    super(props);
    this.label_input = null;
    this.ability_input = null;
  }

  render() {
    const { visible, onOk, onCancel } = this.props;
    return (
      <Modal show={visible} onHide={onCancel}>
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
            onOk(this.label_input.value, this.ability_input.value);
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
