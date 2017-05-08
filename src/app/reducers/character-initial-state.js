export const initialState = {
  level : { label:{fr:'Niveau'}, actual:0 }
  , size : {
    label:{fr:'Taille'}
    , rank:0
    , actual:0
    , effects:[]
    , list:[
        {value:-2, label:{fr:'trés petit'}}
        , {value:-1, label:{fr:'petit'}}
        , {value:0, label:{fr:'moyen'}}
        , {value:1, label:{fr:'grand'}}
        , {value:2, label:{fr:'trés grand'}}
    ]
  }
  , abilities : {
    strength : { label:{fr:'FOR'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
    , constitution : { label:{fr:'CON'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
    , wisdom : { label:{fr:'SAG'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
    , intelligence : { label:{fr:'INT'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
    , dexterity : { label:{fr:'DEX'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
    , charisma : { label:{fr:'CHA'},rank:10,bonus:0,actual:10,modifier:0,effects:[]}
  }
  , saving_throws : {
    fortitude: { label:{fr:'Fortitude'}, rank : 0, actual : 0, effects:[], ability:"constitution" }
    , reflex: { label:{fr:'Reflexe'}, rank : 0, actual : 0, effects:[], ability:"dexterity" }
    , will: { label:{fr:'Volonté'}, rank : 0, actual : 0, effects:[], ability:"charisma" }
  }
  , hit_points : { label:{fr:'PV'}, rank:0, damage:0, actual:0, effects:[] }
  , armor_class : {
      label: {fr:'CA'}, actual:10, effects:[]
      , armors:[]
  }
  , initiative : { label:{fr:'Initiative'}, actual: 0, effects:[] }
  , attack: {
    label:{fr:'Attaque'}
    , base : { label:{fr:'Base'}, rank : 0, actual: 0, effects : [] }
    , contact : { label:{fr:'Contact'}, actual : 0, effects:[] }
    , distant : { label:{fr:'Distance'}, actual : 0, effects:[] }
    , weapons : []
  }
  , skills: [
    {id:1, label: {en:"Appraise", fr:"Estimation"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:2, label: {en:"Balance", fr:"Acrobatie"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:3, label: {en:"Climb", fr:"Escalade"}, rank : 0, actual: 0, ability:"strength" }
    , {id:4, label: {en:"Concentration", fr:"Concentration"}, rank : 0, actual: 0, ability:"constitution" }
    , {id:5, label: {en:"Craft", fr:"Artisanat"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:6, label: {en:"Decipher script", fr:"Langage secret"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:7, label: {en:"Diplomacy", fr:"Diplomatie"}, rank : 0, actual: 0, ability:"charisma" }
    , {id:8, label: {en:"Disable device", fr:"Désamorçage/sabotage"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:9, label: {en:"Disguise", fr:"Déguisement"}, rank : 0, actual: 0, ability:"charisma" }
    , {id:10, label: {en:"Escape artist", fr:"Evasion"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:11, label: {en:"Gather information", fr:"Renseignements"},  rank : 0, actual: 0, ability:"charisma" }
    , {id:12, label: {en:"Handle animal", fr:"Dressage"}, rank : 0, actual: 0, ability:"charisma" }
    , {id:13, label: {en:"Heal", fr:"Premiers secours"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:14, label: {en:"Hide", fr:"Discrétion"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:15, label: {en:"Intimidate", fr:"Intimidation"}, rank : 0, actual: 0, ability:"charisma" }
    , {id:16, label: {en:"Jump", fr:"Saut"}, rank : 0, actual: 0, ability:"strength" }
    , {id:17, label: {en:"Knowledge sorcery", fr:"Connaissance des sorts"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:18, label: {en:"Knowledge mystery", fr:"Connaissance des mystères"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:19, label: {en:"Knowledge religion", fr:"Connaissance des religions"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:20, label: {en:"Listen", fr:"Perception auditive"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:21, label: {en:"Move silently", fr:"Déplacement silencieux"},rank : 0, actual: 0, ability:"dexterity" }
    , {id:22, label: {en:"Open lock", fr:"Crochetage"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:23, label: {en:"Orientation", fr:"Sens de l'orientation"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:24, label: {en:"Perform", fr:"Représentation"}, rank : 0, actual: 0, ability:"charisma" }
    , {id:25, label: {en:"Profession", fr:"Profession"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:26, label: {en:"Ride", fr:"Equitation"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:27, label: {en:"Search", fr:"Représentation"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:28, label: {en:"Sense motive", fr:"Psychologie"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:29, label: {en:"Sleight of hand", fr:"Vol à la tire"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:30, label: {en:"Spellcraft", fr:"Alchimie"}, rank : 0, actual: 0, ability:"intelligence" }
    , {id:31, label: {en:"Spot", fr:"Detection"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:32, label: {en:"Survival", fr:"Sens de la nature"}, rank : 0, actual: 0, ability:"wisdom" }
    , {id:33, label: {en:"Swim", fr:"Natation"}, rank : 0, actual: 0, ability:"strength" }
    , {id:34, label: {en:"Tumble", fr:"Equilibre"}, rank : 0, actual: 0, ability:"dexterity" }
    , {id:35, label: {en:"Use rope", fr:"Maitrise des cordes"}, rank : 0, actual: 0, ability:"dexterity" }
  ]
};
