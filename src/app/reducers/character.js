import * as types from '../actions/character-action-types';
const initial_state = {
  abilities : {
    strength : { label:{fr:'FOR'},rank:0,bonus:0,actual:0,modifier:0,effects:[]},
    constitution : { label:{fr:'CON'},rank:0,bonus:0,actual:0,modifier:0,effects:[]},
    wisdom : { label:{fr:'SAG'},rank:0,bonus:0,actual:0,modifier:0,effects:[]},
    intelligence : { label:{fr:'INT'},rank:0,bonus:0,actual:0,modifier:0,effects:[]},
    dexterity : { label:{fr:'DEX'},rank:0,bonus:0,actual:0,modifier:0,effects:[]},
    charisma : { label:{fr:'CHA'},rank:0,bonus:0,actual:0,modifier:0,effects:[]}
  },
  skills: {
    appraise:{ label: {fr:"Estimation"}, rank : 0, actual: 0, ability:"intelligence" },
    balance:{ label: {fr:"Acrobatie"}, rank : 0, actual: 0, ability:"dexterity" },
    bluff:{ label: {fr:"Bluff"}, rank : 0, actual: 0, ability:"charisma" },
    climb:{ label: {fr:"Escalade"}, rank : 0, actual: 0, ability:"strength" },
    concentration:{ label: {fr:"Concentration"}, rank : 0, actual: 0, ability:"constitution" },
    craft:{ label: {fr:"Artisanat"}, rank : 0, actual: 0, ability:"intelligence" },
    decipher_script:{ label: {fr:"Langage secret"}, rank : 0, actual: 0, ability:"intelligence" },
    diplomacy:{ label: {fr:"Diplomatie"}, rank : 0, actual: 0, ability:"charisma" },
    disable_device:{ label: {fr:"Désamorçage/sabotage"}, rank : 0, actual: 0, ability:"intelligence" },
    disguise:{ label: {fr:"Déguisement"}, rank : 0, actual: 0, ability:"charisma" },
    escape_artist:{ label: {fr:"Evasion"}, rank : 0, actual: 0, ability:"dexterity" },
    forgery:{ label: {fr:"Artisanat"}, rank : 0, actual: 0, ability:"intelligence" },
    gather_information:{label: {fr:"Renseignements"},  rank : 0, actual: 0, ability:"charisma" },
    handle_animal:{label: {fr:"Dressage"}, rank : 0, actual: 0, ability:"charisma" },
    heal:{ label: {fr:"Premiers secours"}, rank : 0, actual: 0, ability:"wisdom" },
    hide:{ label: {fr:"Discrétion"}, rank : 0, actual: 0, ability:"dexterity" },
    intimidate:{ label: {fr:"Intimidation"}, rank : 0, actual: 0, ability:"charisma" },
    jump:{ label: {fr:"Saut"}, rank : 0, actual: 0, ability:"strength" },
    knowledge_sorcery:{label: {fr:"Connaissance des sorts"}, rank : 0, actual: 0, ability:"intelligence" },
    knowledge_mystery:{label: {fr:"Connaissance des mystères"}, rank : 0, actual: 0, ability:"intelligence" },
    knowledge_religion:{label: {fr:"Connaissance des religions"}, rank : 0, actual: 0, ability:"intelligence" },
    listen:{label: {fr:"Perception auditive"}, rank : 0, actual: 0, ability:"wisdom" },
    move_silently:{ label: {fr:"Déplacement silencieux"},rank : 0, actual: 0, ability:"dexterity" },
    open_lock:{ label: {fr:"Crochetage"}, rank : 0, actual: 0, ability:"dexterity" },
    orientation:{ label: {fr:"Sens de l'orientation"}, rank : 0, actual: 0, ability:"dexterity" },
    perform:{ label: {fr:"Représentation"}, rank : 0, actual: 0, ability:"charisma" },
    profession:{ label: {fr:"Profession"}, rank : 0, actual: 0, ability:"wisdom" },
    ride:{ label: {fr:"Equitation"}, rank : 0, actual: 0, ability:"dexterity" },
    search:{ label: {fr:"Représentation"}, rank : 0, actual: 0, ability:"intelligence" },
    sense_motive:{ label: {fr:"Psychologie"}, rank : 0, actual: 0, ability:"wisdom" },
    sleight_of_hand:{label: {fr:"Vol à la tire"}, rank : 0, actual: 0, ability:"dexterity" },
    spellcraft:{label: {fr:"Alchimie"}, rank : 0, actual: 0, ability:"intelligence" },
    spot:{ label: {fr:"Detection"}, rank : 0, actual: 0, ability:"wisdom" },
    survival:{ label: {fr:"Sens de la nature"}, rank : 0, actual: 0, ability:"wisdom" },
    swim:{ label: {fr:"Natation"}, rank : 0, actual: 0, ability:"strength" },
    tumble:{ label: {fr:"Equilibre"}, rank : 0, actual: 0, ability:"dexterity" },
    use_rope:{label: {fr:"Maitrise des cordes"}, rank : 0, actual: 0, ability:"dexterity" }
  }
};

export default function character(state = initial_state, action = {}) {
  switch (action.type) {
    case types.CHANGE_ABILITY_RANK:
      var new_state = {...state};
      var rank = parseInt(action.rank, 10);
      var bonus = parseInt(new_state.abilities[action.name].bonus, 10);
      var actual = rank + bonus;
      var modifier = Math.floor( (actual - 10) / 2 );
      new_state.abilities[action.name].rank = parseInt(action.rank, 10);
      new_state.abilities[action.name].actual = new_state.abilities[action.name].rank + new_state.abilities[action.name].bonus;
      new_state.abilities[action.name].modifier = Math.floor( (new_state.abilities[action.name].actual - 10) / 2 );
      for (var skill in new_state.skills) {
        if (new_state.skills[skill].ability === action.name) {
            new_state.skills[skill].actual = new_state.skills[skill].rank + new_state.abilities[action.name].modifier;
        }
      }
      return new_state;
    case types.CHANGE_SKILL_RANK:
      var new_state = {...state};
      new_state.skills[action.name].rank = parseInt(action.rank, 10);
      new_state.skills[action.name].actual = new_state.skills[action.name].rank + new_state.abilities[new_state.skills[action.name].ability].modifier;
      return new_state;
    case types.RESET_CHARACTER:
    default:
      return initial_state;
  }
}
