import React, {Component} from 'react';
import {Button, Table} from 'react-bootstrap';
import SkillForm from './skill-form';

import {language} from '../i18n/language';


export default class SkillsForm extends Component {
  constructor(props) {
    super(props);
  }

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
      return (<SkillForm skill={skills[skill_id]} onRankChange={onRankChange}/>);
    });
  }

  render() {
    const { skills, onRankChange, onNewSkill } = this.props;
    return (
      <div className="skills">
        <h2>Skills</h2>
        <Button onClick={onNewSkill}>+</Button>
        <Table condensed>
            <thead>
              <tr><td>&nbsp;</td><td>Rk</td><td>Act</td></tr>
            </thead>
            <tbody>
            { this.renderSkills(skills, onRankChange) }
            </tbody>
        </Table>
      </div>
   );
  }
}
