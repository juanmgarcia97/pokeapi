// All alert() statement return undefined so I run them on the browser console.

alert(null || 2 || undefined); //1. Shows an alert with the value 2.

alert(alert(1) || 2 || alert(3)); //2. Shows two alerts, first with value 1 and then with value 2.

alert(alert(1) && alert(2)); //3. Shows two alerts, first with value 1 and then with value undefined.

alert(null || (2 && 3) || 4); //4. Shows one alert with the value 3.

function verifyAge(age) {
  if (age >= 14 && age <= 90) {
    return true;
  }
  if (Math.floor(age) <= 6 || Math.floor(age) >= 45) {
    return false;
  }
  return verifyAge(age / 2);
}
console.log(verifyAge(91));

alert(alert(null) ?? null ?? 2 ?? alert(3)); //6. Shows two alerts, first with the value null ant then with value 2.

//7.
if (-1 || 0) alert('first'); // this executes first
if (-1 && 0) alert('second');
if (null || (-1 && 1)) alert('third');

//8.
let user;
alert(user ?? 'Anonymous'); // Shows alert with value Anonymous

//9.
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';
alert(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Shows alert with value Supercoder

//10.
let age = prompt('age?', 18);
let message =
  age < 3
    ? 'Hi, baby!'
    : age < 18
    ? 'Hello!'
    : age < 100
    ? 'Greetings!'
    : 'What an unusual age!';
alert(message); // Shows alert with value Greetings!

//11.
5 > 4; //true
'apple' > 'pineapple'; // false
'2' > '12'; //true
undefined == null; // true
undefined === null; // false
null == '\n0\n'; // false
null === +'\n0\n'; // false
