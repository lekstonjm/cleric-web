import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import {language} from '../i18n/language';

export default class SizeForm extends Component {

  constructor(props) {
    super(props);
    this.refSelect = null;
  }

  renderOptions(size) {
    return Object.keys(size.list).map((item) => {
      return (
        <option key={size.list[item].value} value={size.list[item].value}>{size.list[item].label[language]}</option>
      )
    });
  }

  render() {
    const { size, onChange } = this.props;

    return (
        <Table>
          <tbody>
            <tr>
              <td>{size.label[language]}</td>
              <td>
                <select
                  value={size.actual}
                  ref={ (input) => { this.refSelect=input; } }
                  onChange={ () => { onChange(this.refSelect.value); } }>
                  {this.renderOptions(size)}
                </select>
              </td>
            </tr>
        </tbody>
      </Table>
    );
  }
}
