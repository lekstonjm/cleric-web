import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AttackView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {  } = this.props;
    return (
      <div>
        <h2>Fighting</h2>
        <h3>Initiative</h3>
        <Table>
          <thead><tr><td></td><td>Base</td><td>Actual</td><td>Effects</td></tr></thead>
          <tbody><tr><td>initiative</td><td>0</td><td>0</td><td><Button>+</Button></td></tr></tbody>
        </Table>
        <h3>Attack</h3>
        <Table>
          <thead><tr><td>Base</td><td>Actual</td><td>Effects</td></tr></thead>
          <tbody><tr><td>0</td><td>0</td><td><Button>+</Button></td></tr></tbody>
        </Table>
        <h3>Weapons <Button>New</Button></h3>
        <Table>
          <thead><tr><td>Name</td><td>Attack</td><td>Damages</td><td>Effects</td></tr></thead>
          <tbody><tr><td>No name</td><td>0</td><td>0</td><td><Button>+</Button></td></tr></tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => ({
  }),
  (dispatch) => ({
  })
)(AttackView);
