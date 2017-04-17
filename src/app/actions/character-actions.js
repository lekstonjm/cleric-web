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
