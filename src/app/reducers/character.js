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
  skills: [
    {id:"appraise",  label: {fr:"Estimation"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"balance",  label: {fr:"Acrobatie"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"climb",  label: {fr:"Escalade"}, rank : 0, actual: 0, ability:"strength" },
    {id:"concentration",  label: {fr:"Concentration"}, rank : 0, actual: 0, ability:"constitution" },
    {id:"craft",  label: {fr:"Artisanat"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"decipher_script",  label: {fr:"Langage secret"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"diplomacy",  label: {fr:"Diplomatie"}, rank : 0, actual: 0, ability:"charisma" },
    {id:"disable_device",  label: {fr:"Désamorçage/sabotage"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"disguise",  label: {fr:"Déguisement"}, rank : 0, actual: 0, ability:"charisma" },
    {id:"escape_artist",  label: {fr:"Evasion"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"forgery",  label: {fr:"Artisanat"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"gather_information", label: {fr:"Renseignements"},  rank : 0, actual: 0, ability:"charisma" },
    {id:"handle_animal", label: {fr:"Dressage"}, rank : 0, actual: 0, ability:"charisma" },
    {id:"heal",  label: {fr:"Premiers secours"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"hide",  label: {fr:"Discrétion"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"intimidate",  label: {fr:"Intimidation"}, rank : 0, actual: 0, ability:"charisma" },
    {id:"jump",  label: {fr:"Saut"}, rank : 0, actual: 0, ability:"strength" },
    {id:"knowledge_sorcery", label: {fr:"Connaissance des sorts"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"knowledge_mystery", label: {fr:"Connaissance des mystères"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"knowledge_religion", label: {fr:"Connaissance des religions"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"listen", label: {fr:"Perception auditive"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"move_silently",  label: {fr:"Déplacement silencieux"},rank : 0, actual: 0, ability:"dexterity" },
    {id:"open_lock",  label: {fr:"Crochetage"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"orientation",  label: {fr:"Sens de l'orientation"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"perform",  label: {fr:"Représentation"}, rank : 0, actual: 0, ability:"charisma" },
    {id:"profession",  label: {fr:"Profession"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"ride",  label: {fr:"Equitation"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"search",  label: {fr:"Représentation"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"sense_motive",  label: {fr:"Psychologie"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"sleight_of_hand", label: {fr:"Vol à la tire"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"spellcraft", label: {fr:"Alchimie"}, rank : 0, actual: 0, ability:"intelligence" },
    {id:"spot",  label: {fr:"Detection"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"survival",  label: {fr:"Sens de la nature"}, rank : 0, actual: 0, ability:"wisdom" },
    {id:"swim",  label: {fr:"Natation"}, rank : 0, actual: 0, ability:"strength" },
    {id:"tumble",  label: {fr:"Equilibre"}, rank : 0, actual: 0, ability:"dexterity" },
    {id:"use_rope", label: {fr:"Maitrise des cordes"}, rank : 0, actual: 0, ability:"dexterity" } ]
};

export default function character(state = initial_state, action = {}) {
  var new_state = {...state};
  switch (action.type) {
    case types.CHANGE_ABILITY_RANK:
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
      var index = new_state.skills.findIndex((element)=>{ return element.id === action.name});
      console.log(action.name+' '+index);
      new_state.skills[index].rank = parseInt(action.rank, 10);
      var ability = new_state.skills[index].ability;
      new_state.skills[index].actual = new_state.skills[index].rank + new_state.abilities[ability].modifier;
      return new_state;
    case types.NEW_SKILL:
      new_state.skills.push({id:action.name, label:{fr:action.label}, rank:0, actual:0, ability:action.ability});
      return new_state;
    case types.RESET_CHARACTER:
    default:
      return initial_state;
  }
}
