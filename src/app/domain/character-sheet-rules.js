export function getEffects(character, property_path) {
  var effects = [];
  var obj = character;
  for (var property in property_path) {
    obj = obj[property_path[property]];
    if (obj === null) {
      break;
    }
  }
  if (obj !== null) {
    effects = obj.effects;
  }
  return effects;
}

function updateAbility(ability) {
  var bonus = 0;
  for (var effect in ability.effects){
    bonus += parseInt(ability.effects[effect].value,10);
  }
  ability.actual = ability.rank + bonus;
  ability.modifier = Math.floor( (ability.actual - 10) / 2 );
}

function updateSkill(character, skill) {
  skill.actual = skill.rank + character.abilities[skill.ability].modifier;
}

function updateSavingThrow(character, saving_throw) {
  var bonus = 0;
  for (var effect in saving_throw.effects){
    bonus += parseInt(saving_throw.effects[effect].value,10);
  }
  saving_throw.actual = saving_throw.rank + bonus + character.abilities[saving_throw.ability].modifier;
}

function updateInitiative(character) {
  var bonus = 0;
  for (var effect in character.initiative.effects){
    bonus += parseInt(character.initiative.effects[effect].value,10);
  }
  character.initiative.actual = character.abilities.dexterity.modifier + bonus;
}

function updateAbilities(character) {
    for (var ability in character.abilities) {
      updateAbility(character.abilities[ability]);
    }
}

function updateSkills(character) {
  for (var skill in character.skills) {
      updateSkill(character, character.skills[skill]);
  }
}

function updateSavingThrows(character) {
  for (var saving_throw in character.saving_throws) {
    updateSavingThrow(character, character.saving_throws[saving_throw]);
  }
}

function updateHitPoints(character) {
  character.hit_points.actual = parseInt(character.hit_points.rank,10)
    + parseInt(character.abilities.constitution.modifier,10) * parseInt(character.level.actual,10)
    - parseInt(character.hit_points.damage,10);
}

function updateArmorClass(character) {
  var bonus = 0;
  for (var effect in character.armor_class.effects){
    bonus += parseInt(character.armor_class.effects[effect].value,10);
  }
  character.armor_class.actual = 10 + character.abilities.dexterity.modifier + bonus;
}

function updateAttack(character) {
  var bonus = 0;
  var effect_index = null;
  for (effect_index in character.attack.base.effects){
    bonus += parseInt(character.attack.base.effects[effect_index].value,10);
  }
  character.attack.base.actual = character.attack.base.rank + bonus;
  bonus = 0;
  for (effect_index in character.attack.contact.effects){
    bonus += parseInt(character.attack.contact.effects[effect_index].value,10);
  }
  character.attack.contact.actual = character.attack.base.actual + character.abilities.strength.modifier + bonus;
  bonus = 0;
  for (effect_index in character.attack.distant.effects){
    bonus += parseInt(character.attack.distant.effects[effect_index].value,10);
  }
  character.attack.distant.actual = character.attack.base.actual + character.abilities.dexterity.modifier + bonus;

  for (var weapon_index in character.attack.weapons) {
    var weapon = character.attack.weapons[weapon_index];
    bonus = 0;
    for (effect_index in weapon.effects){
      bonus += parseInt(weapon.effects[effect_index].value,10);
    }
    if (weapon.two_handed) {
      bonus = 1.5 * bonus;
    }
    weapon.touch.base = character.attack.base.actual;
    weapon.touch.actual = character.attack[weapon.type].actual + bonus;
    var ability_name = "strength";
    if (weapon.type === "distant") {
      ability_name = "dexterity";
    }
    bonus = character.abilities[ability_name].modifier + bonus;
    weapon.damage.actual = weapon.damage.base;
    if (bonus > 0)  {
      weapon.damage.actual = weapon.damage.actual + " + " + bonus;
    }
  }
}

function updateArmor(character) {
  
}

export function update(character) {
  updateAbilities(character);
  updateSkills(character);
  updateHitPoints(character);
  updateSavingThrows(character);
  updateInitiative(character);
  updateArmorClass(character);
  updateAttack(character);
}
