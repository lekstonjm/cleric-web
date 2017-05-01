import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import {language} from '../i18n/language';

export default class LevelForm extends Component {

  constructor(props) {
    super(props);
    this.refLevel = null;
  }

  render() {
    const { level, onChange } = this.props;
    return (
        <Table>
          <tbody>
            <tr>
              <td>{level.label[language]}</td>
              <td>
                <input
                  type="number"
                  value={level.actual}
                  ref={ (input) => { this.refLevel = input; } }
                  onClick={ () => { this.refLevel.select();} }
                  onChange={ () => { onChange(this.refLevel.value); } }/>
              </td>
            </tr>
        </tbody>
      </Table>
    );
  }
}
