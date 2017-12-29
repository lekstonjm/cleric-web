import * as types from './hmi-action-types';

export function showNewSkillForm() {
  return {
    type : types.SHOW_NEW_SKILL_FORM
  }
}

export function hideNewSkillForm() {
  return {
    type : types.HIDE_NEW_SKILL_FORM
  }
}

export function showEffectsForm(property_path) {
  return {
    type : types.SHOW_EFFECTS_FORM,
    property_path : property_path
  }
}

export function hideEffectsForm() {
  return {
    type : types.HIDE_EFFECTS_FORM
  }
}

export function showNewWeaponForm() {
  return {
    type : types.SHOW_NEW_WEAPON_FORM
  }
}

export function hideNewWeaponForm() {
  return {
    type : types.HIDE_NEW_WEAPON_FORM
  }
}

export function showNewArmorForm() {
  return {
    type : types.SHOW_NEW_ARMOR_FORM
  }
}

export function hideNewArmorForm() {
  return {
    type : types.HIDE_NEW_ARMOR_FORM
  }
}
