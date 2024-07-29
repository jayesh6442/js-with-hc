// console.log("we are in the primitive and reference");

// primitive
// string ,number ,boolean , null , undefined , symbol, bigint

// reference
// array, object , functionw

// const a = () => console.log("we are in the function");

// console.log(typeof a);

// let myName = "jayesh";
// console.log(myName);
// let surName = myName;
// console.log(surName);

// surName = "sarvaiya";
// console.log(surName);
// console.log(myName);

let myObj = {
  fname: "jayesh",
  age: 21,
};

let myObjTwo = myObj;

console.log(myObj.fname);
console.log(myObjTwo.fname);

myObjTwo.fname = "sarvaiya";

console.log(myObj.fname);
console.log(myObjTwo.fname);
