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

export function showEffectsForm(ability) {
  return {
    type : types.SHOW_EFFECTS_FORM,
    ability : ability
  }
}

export function hideEffectsForm() {
  return {
    type : types.HIDE_EFFECTS_FORM
  }
}
