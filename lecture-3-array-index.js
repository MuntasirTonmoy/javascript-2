//* We access array through index
//! array index starts from 0

var myFriends = ['Abir', 'Lanin', 'Mithun', 'Rumman'];
// if we want to check the index of array we can use array
//* variableName.indexOf('string' or number); function

console.log(myFriends.indexOf('Abir'));

//! if index of array say -1 then it isn't in the array.
console.log(myFriends.indexOf('Muntasir'));

//* array value store inside  variablename[index] variable
//we can check that 

console.log(myFriends[2]); // it means we we are seeing the 3rd element or the array means n-1 so if we want to see the 5th element of the array we have to write 5-1 means n-1 means 4

// if we check the element which is not inside the array then output will say undefined

console.log(myFriends[55]);

// variablename[index] is also a variable we can change the value of it
myFriends[2] = 'Rony';
console.log(myFriends);

// we can also add a element means declare a new array variable
myFriends[4] = 'Mithun'; // it is undefined in the array we define it now.
console.log(myFriends);


