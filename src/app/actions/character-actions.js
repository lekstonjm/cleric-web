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
  return {
    type: types.CHANGE_SKILL_RANK,
    id : skill_id,
    rank: new_rank
  }
}


export function removeSkill(skill_id) {
  return {
    type: types.REMOVE_SKILL,
    id : skill_id
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

export function changeSize(new_size) {
  return {
    type: types.CHANGE_SIZE,
    size : new_size
  }
}

export function changeBaseAttackRank(new_rank) {
  return {
    type: types.CHANGE_BASE_ATTACK_RANK,
    rank: new_rank
  }
}

export function removeWeapon(weapon_index) {
  return {
      type : types.REMOVE_WEAPON
    , id : weapon_index
  }
}

export function newWeapon(name, type, two_handed, damage) {
  return {
      type : types.NEW_WEAPON
    , name : name
    , weapon_type : type
    , two_handed : two_handed
    , damage : damage
  }
}

export function removeArmor(armor_index) {
  return {
      type : types.REMOVE_ARMOR
    , id : armor_index
  }
}

export function newArmor(name, type, armor_bonus, shield_bonus) {
  return {
      type : types.NEW_ARMOR
    , name : name
    , armor_bonus : armor_bonus
    , shield_bonus : shield_bonus
  }
}
