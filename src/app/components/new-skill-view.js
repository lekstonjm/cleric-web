import React, {Component} from 'react';
import {language} from '../i18n/language';

export default class NewSkillView extends Component {
  constructor(props) {
    super(props);
    this.name_input = null;
    this.label_input = null;
    this.ability_input = null;
  }

  render() {
    const { newSkillSubmit } = this.props;
    return (
      <form onSubmit={  (e) => {
          e.preventDefault();
          newSkillSubmit(this.name_input.value,
            this.label_input.value,
            this.ability_input.value);
      }}>
        <label>id<input ref={ (input) => {this.name_input = input} } id="name" type="text" value=""/></label>
        <label>label<input ref={ (input) => {this.label_input = input} } id="label" type="text" value=""/></label>
        <label>ability<input ref={ (input) => {this.ability_input = input} } type="text" value=""/></label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
