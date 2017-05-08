import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import SkillForm from './skill-form';

import {language} from '../i18n/language';


export default class SkillsForm extends Component {

  renderSkills(skills, onRankChange) {
    var sort_fn = (item1, item2) => {
      if (item1.label[language] > item2.label[language]) {
        return 1;
      } else if (item1.label[language] < item2.label[language]) {
        return -1;
      } else {
        return 0;
      }
    };
    return Object.keys(skills.sort(sort_fn)).map( (skill_id) => {
      return (<SkillForm key={skills[skill_id].id} skill={skills[skill_id]} onRankChange={(new_rank)=>onRankChange(skills[skill_id].id, new_rank)}/>);
    });
  }

  render() {
    const { skills, onRankChange, onNewSkill } = this.props;
    return (
      <Table condensed>
          <thead>
            <tr><td>Skills <Button bsSize="xsmall" onClick={onNewSkill}>+</Button></td><td>Rank</td><td>Actual</td></tr>
          </thead>
          <tbody>
          { this.renderSkills(skills, onRankChange) }
          </tbody>
      </Table>
   );
  }
}
