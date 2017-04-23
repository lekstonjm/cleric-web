import React, {Component} from 'react';
import {Modal, Button, Form, FormGroup, FormControl, Table} from 'react-bootstrap';

export default class EffectsForm extends Component {
  constructor(props) {
    super(props);
    this.description_input = null;
    this.value_input = null;
  }

  renderEffects(effects, onRemove) {
      return Object.keys(effects).map( (effect) => {
        var effect = effects[effect];
        return (
          <tr key={effect.id}>
            <td>{effect.description}</td>
            <td>{effect.value}</td>
            <td><Button onClick={() => onRemove(effect.id)}>-</Button></td>
          </tr>
        );
      });
  }

  render() {
    const { visible, effects, onAdd, onRemove, onHide } = this.props;
    return (
      <Modal show={visible} onHide={onHide}>
        <Modal.Header closeButton>
          Effects
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
            </thead>
            <tbody>
              {this.renderEffects(effects, onRemove)}
              <tr>
                <td><FormControl inputRef={ (input) => { this.description_input = input} } type="text" placeholder="Effect description" /></td>
                <td><FormControl inputRef={ (input) => { this.value_input = input} } type="numeric" placeholder="+/- effect" /></td>
                <td>
                  <Button onClick={ () => { onAdd(this.description_input.value, this.value_input.value); } }>
                    +
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    );
  }
}
