/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object
   carDetails into new variables. 
*/

//Code Here
var {color, make, model, year} = carDetails


////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj) {
  //Code Here
  var {title, firstName, lastName} = obj;
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}
// console.log(greeting({firstName: 'Henry', lastName: 'Von Eckleberry', title: 'Sir'}))

////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
function totalPopulation (obj){
  var {utah, california, texas, arizona} = obj;
  return utah + california + texas + arizona
}
// console.log(totalPopulation({utah: 1045, california: 987, texas: 192937, arizona: 347}))

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
function ingredients({carb,fat, protein}){
  var {carb, fat, protein} = {carb, fat, protein}
  var array = []
  array.push(carb, fat, protein);
  return array
}

// console.log(ingredients({carb: "b", fat:"c", protein: "d"}))

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of 
  destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values
   will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here
function largeNumbers({first, second, third}) {
  const arr = [first, second, third];
  const min = Math.min(...arr);
  return min;
}
// console.log(largeNumbers({first: 10, second: 2, third: 90}))

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object 
  as it's parameter.
  The object properties will be named a, b, and c and their values 
  will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here
function numberGroups({a = [], b = [], c = []} = {}){
  let bL = b.length; 
  let aL = a.length;
  let cL = c.length;
  const max = Math.max(bL, aL, cL)
  if (max == aL) {
    return a;
  } else if(max == bL){
    return b;
  } else if(max == cL) {
    return c;
  }
}
// numberGroups({a:[1,2], b: [2, 3, 4], c:[2, 3, 4, 5]})