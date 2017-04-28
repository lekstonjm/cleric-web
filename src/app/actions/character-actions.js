import * as types from './character-action-types';

export function resetCharacter() {
  return {
    type : types.RESET_CHARACTER
  }
}

export function changeAbilityRank(ability_name, new_rank) {
  return {
    type: types.CHANGE_ABILITY_RANK,
    name : ability_name,
    rank: new_rank
  }
}

export function changeSkillRank(skill_id, new_rank) {
  console.log(skill_id);
  return {
    type: types.CHANGE_SKILL_RANK,
    id : skill_id,
    rank: new_rank
  }
}

export function newSkill(label, ability) {
  return {
    type: types.NEW_SKILL,
    label: label,
    ability: ability
  }
}

export function addEffect(property_path, description, value) {
  return {
    type: types.ADD_EFFECT,
    property_path: property_path,
    description: description,
    value: value
  }
}

export function removeEffect(property_path, effect_id) {
  return {
    type: types.REMOVE_EFFECT,
    property_path: property_path,
    id: effect_id
  }
}

export function changeHitPointsRank(rank) {
  return {
    type: types.CHANGE_HIT_POINTS_RANK,
    rank : rank
  }
}

export function changeHitPointsDamage(damage) {
  return {
    type: types.CHANGE_HIT_POINTS_DAMAGE,
    damage : damage
  }
}

export function changeLevel(level) {
  return {
    type: types.CHANGE_LEVEL,
    level: level
  }
}

export function changeSavingThrowRank(saving_name, rank) {
  return {
    type: types.CHANGE_SAVING_THROW_RANK,
    name : saving_name,
    rank : rank
  }
}
