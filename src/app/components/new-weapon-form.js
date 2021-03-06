import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';


export default class NewWeaponForm extends Component {
  constructor(props) {
    super(props);
    this.name_input = null;
    this.type_input = null;
    this.damage_input = null;
    this.two_handed_input = null;
  }

  render() {
    const { visible, onOk, onCancel } = this.props;
    return (
      <Modal show={visible} onHide={onCancel}>
        <Modal.Header closeButton>
          <Modal.Title>New Weapon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form horizontal>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Name
             </Col>
             <Col sm={6}>
               <FormControl inputRef={ref => { this.name_input = ref; }}  type="text" placeholder="Enter weapon name" />
             </Col>
           </FormGroup>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Type
             </Col>
             <Col sm={6}>
               <select ref={ref => { this.type_input = ref; }}>
                <option value="contact">Contact</option>
                <option value="distant">Distant</option>
              </select>
             </Col>
           </FormGroup>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Two-handed
             </Col>
             <Col sm={6}>
              <input type="checkbox" ref={ref => { this.two_handed_input = ref;}}/>
             </Col>
           </FormGroup>
           <FormGroup>
             <Col componentClass={ControlLabel} sm={6}>
               Damage
             </Col>
             <Col sm={6}>
               <FormControl inputRef={ref => { this.damage_input = ref; }} type="text" placeholder="Weapon damage ex:1D6"/>
             </Col>
           </FormGroup>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{
            onOk(this.name_input.value
                , this.type_input.value
                , this.two_handed_input.value
                , this.damage_input.value);
          }}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
