let dic = {
  '🍠': '🍟',
  '🐔': '🍗',
  '🐄': '🍔',
  '🌽': '🍿',
};

let eatable = {
  '🍟': true,
  '🍿': true,
  '🍗': true,
  '🍔': true,
};

function cookPrimal(primal) {
  return dic[primal];
}

console.log(cookPrimal('🐔'));
console.log(cookPrimal('🐄'));
console.log(cookPrimal('🌽'));
console.log(cookPrimal('🍠'));

function isCookedFoodVegetarian(cooked) {
  return cooked == '🍟' || cooked == '🍿' ? true : false;
}

console.log(isCookedFoodVegetarian('🍗'));
console.log(isCookedFoodVegetarian('🍿'));

function eatCookedFood(cooked) {
  return eatable[cooked] != undefined ? '🤤' : '🤢';
}

console.log(eatCookedFood('🍗'));
console.log(eatCookedFood('🐄'));

function cookPrimalArray(array) {
  let cooked = array.map((p) => dic[p]);
  return cooked;
}

console.log(cookPrimalArray(['🐄', '🐔', '🌽', '🍠']));

function hasVeggieFood(array) {
  let veg = '🍟' || '🍿';
  return array.some((value, index, arr) => arr.filter((c) => c == veg));
}

console.log('Has veggie? ', hasVeggieFood(['🐄', '🐔', '🌽', '🍠']));

function hasFlesh(array) {
  let flesh = '🍗' || '🍔';
  return array.some((value, index, arr) => arr.filter((c) => c == flesh));
}

console.log('Has flesh? ', hasFlesh(['🐄', '🐔', '🌽', '🍠']));
