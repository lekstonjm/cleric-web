import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';
import {language} from '../i18n/language';

class EffectsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hmi, hideEffectsForm } = this.props;
    return (
      <Modal show={hmi.effects_form_visible} onHide={hideEffectsForm}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    hmi : state.hmi
  }),
  (dispatch) => ({
    hideEffectsForm: () => dispatch(actions.hmi.hideEffectsForm()),
  })
)(EffectsForm);
