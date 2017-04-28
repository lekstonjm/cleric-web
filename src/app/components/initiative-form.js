import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

import {language} from '../i18n/language';

import * as actions from '../actions';

export default class InitiativeForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { initiative,  onShowEffects } = this.props;
    var button_label = "+";
    if (initiative.effects.length > 0) { button_label = "*";}
    return (
        <Table condensed>
          <tbody>
            <tr>
              <td>{initiative.label[language]}</td>
              <td>{initiative.actual}</td>
              <td><Button bsSize="xsmall" onClick={onShowEffects}>{button_label}</Button></td>
            </tr>
          </tbody>
        </Table>
    );
  }
}
