import React, {Component} from 'react';
import {Modal, Button, ListGroup, ListGroupItem, Form, FormGroup, FormControl, Col} from 'react-bootstrap';

export default class EffectsForm extends Component {
  constructor(props) {
    super(props);
    this.description_input = null;
    this.value_input = null;
  }

  renderEffects(effects, onRemove) {
      return Object.keys(effects).map( (effect) => {
        return (
          <ListGroupItem>{effects[effect].description+" "+effects[effect].value}<Button onClick={() => onRemove(effects[effect].id)}>-</Button></ListGroupItem>
        );
      });
  }

  render() {
    const { visible, effects, onAdd, onRemove, onHide } = this.props;
    return (
      <Modal show={visible} onHide={onHide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>{this.renderEffects(effects, onRemove)}</ListGroup>
          <Form inline>
              <FormControl inputRef={ (input) => { this.description_input = input} } type="text" placeholder="Effect description" />
              <FormControl inputRef={ (input) => { this.value_input = input} } type="numeric" placeholder="+/- effect" />
              <Button onClick={ () => { onAdd(this.description_input.value, this.value_input.value); } }>
                +
              </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}
