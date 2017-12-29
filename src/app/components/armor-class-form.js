import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

import {language} from '../i18n/language';

export default class ArmorClassForm extends Component {

  render() {
    const { armorClass,  onShowEffects } = this.props;
    var button_label = "+";
    if (armorClass.effects.length > 0) { button_label = "*";}
    return (
        <Table condensed>
          <tbody>
            <tr>
              <td>{armorClass.label[language]}</td>
              <td>{armorClass.actual}</td>
              <td>{armorClass.touch}</td>
              <td><Button bsSize="xsmall" onClick={onShowEffects}>{button_label}</Button></td>
            </tr>
          </tbody>
        </Table>
    );
  }
}
