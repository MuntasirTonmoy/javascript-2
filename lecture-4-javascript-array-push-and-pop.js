//* array push mean adding one or more element in the end of array
//* array pop mean removing one element in the end of array

// we can add element in the end of the array like that

var myFriends = ['Abir', 'Lanin', 'Mithun', 'Rumman'];
myFriends[4] = 'Rony'; // it is undefined in the array we define it now.

// but the problem is for long array it is difficult to remember the index

//* that's why we use variableName.push(); and variableName.pop(); function 

myFriends.push('Sagor');
console.log(myFriends); // op: [ 'Abir', 'Lanin', 'Mithun', 'Rumman', 'Rony', 'Sagor' ]
myFriends.push('faysal', 'lanin'); //adding multiple element
console.log(myFriends);

// pop
myFriends.pop(); // removing the last element
myFriends.pop(); // removing the last element means we remove total last two element
console.log(myFriends); // here we remove the last element of the array.

//* pop(); also store the value inside it 
myFriends.pop();
var lastName = myFriends.pop();
console.log(lastName);
console.log(myFriends);

