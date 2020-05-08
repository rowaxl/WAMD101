// Object: prototype object in javascript
// object: { "key": value:any type can }

// empty object;
const obj = {};
console.log('L6: ', obj, '\n');

// assign key and value inside of object
obj["key1"] = "value1";
obj.key2 = 100;
Object.assign(obj, { key3: false })

console.log('L10: ', obj, '\n') // expect: { key1: 'value1', key2: 100, key3: false }

// access to value, you can use below ways
console.log('L13: ', obj.key1, '\n') // expect "value1"
console.log('L14: ', obj["key2"], '\n') // expect "value1", key1 must be string


// delete operator can remove property of object
delete obj.key1
console.log(obj, '\n') // expect: { key2: 100, key3: false }

// object can contain objects
obj.object = {
  someKey: ['arr0', true, null, 10, {}]
}
console.log('L30: ', obj, '\n') 
/**
 * expect:
 * {
  key2: 100,
  key3: false,
  object: { 
    someKey: [ 'arr0', true, null, 10, {} ]
  }
*/

// access to value in deep inside
const deep = obj.object.someKey[0];
console.log('L41: ', deep, '\n'); // expect: 'arr0'

// use Object.keys() can showing object's keys to array
console.log('L44: ', Object.keys(obj), '\n'); // expect: [ 'key2', 'key3', 'object' ]
console.log('L45: ', obj.keys, '\n') // expect: undefined <- it's not inside of object, only in Object!

// you can use keys() when copy your object to other object
const newObj = new Object();
console.log('L49: ', newObj, '\n'); // expect: {}

Object.keys(obj).forEach(key => {
  if (key.indexOf('k') > -1) { // assign if only key start with character k
    newObj[key] = obj[key]
  }
})

console.log('L57: ', newObj, '\n'); // expect: { key2: 100, key3: false }

// or just copy whole property to others
const newObj2 = new Object(obj);
console.log('L61: ', newObj2, '\n');
/**
 * expect:
 * {
  key2: 100,
  key3: false,
  object: { 
    someKey: [ 'arr0', true, null, 10, {} ]
  }
*/

// sometime, it was used as a class
const person = {
  name: 'john doe',
  age: 50,
  greet() {
    console.log(`Hello there, my name is ${this.name}(${this.age})`, '\n')
  }
};

person.greet() // expect: Hello there, my name is john doe(50)

// inheritence like
const jane = Object.create(person);
jane.name = 'jane doe';
jane.age = 33.333;

jane.greet(); // expect: Hello there, my name is jane doe(33.333)


// CAUTION
// object does reference copy
const objA = { a: 'this is A' };
const objB = objA;

objA.a = 'is this B?'; // change value in objA
objB.b = false;        // assign new value in objB

console.log('objA:', objA, '\n');
console.log('objB:', objB, '\n'); 
/**
 * expect:
 *   objA: { a: 'is this B?' }
 *   objB: { a: 'this is A', b: false }
 * 
 * actual:
 *   objA: { a: 'is this B?', b: false }
 *   objB: { a: 'is this B?', b: false }
 * 
 * 
 * WHY??
 * because, object is NOT sticky node type
 * 
 * sticky node(makes instance every time):
 *   string, number, boolean, null, undefined
 * 
 * e.g.)
 * let a = 'abc';
 * let b = a;
 * b = 'cda' // a = 'abc', b = 'cda'
 * 
 * but other types makes only pointer of the data.
 * 
 * ref: https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value/13268731#13268731
 */

// compare object
const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log('L131: ', obj1 == obj2, '\n');  // expect: false
console.log('L132: ', obj1 === obj2, '\n'); // expect: false

const obj3 = obj1;
console.log('L131: ', obj1 == obj3, '\n');  // expect: true
console.log('L132: ', obj1 === obj3, '\n'); // expect: true

// if you want to compare whole entities in object, use Object.keys()
const obj4 = {
  a: 1,
  b: false,
  c: 'Hello',
  d: null
};

const obj5 = {
  b: false, // order doesn't make differences
  c: 'Hello',
  d: null,
  a: 1
};

const obj6 = {
  a: 1,
  b: false,
  c: 'Hello'
};

// is obj4 === obj5?
const compareObj4AndObj5 = Object.keys(obj4).every(key => {
  return key in obj5 && obj4[key] === obj5[key]
});

console.log('obj4 includes all property of obj5: ', compareObj4AndObj5, '\n');

const compareObj5AndObj4 = Object.keys(obj5).every(key => {
  return key in obj4 && obj5[key] === obj4[key]
});

console.log('obj5 includes all property of obj4: ', compareObj5AndObj4, '\n');


// is obj5 === obj6?
const compareObj5AndObj6 = Object.keys(obj5).every(key => {
  return key in obj6 && obj5[key] === obj6[key]
});

console.log('obj6 includes all property of obj5: ', compareObj5AndObj6, '\n');

const compareObj6AndObj5 = Object.keys(obj6).every(key => {
  return key in obj5 && obj6[key] === obj5[key]
});

console.log('obj5 includes all property of obj6: ', compareObj6AndObj5, '\n');
