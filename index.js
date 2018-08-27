// "use strict"
// // Object Literal
// const circle = {
//     radius: 4,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log("Draw");

//     }
// };


// circle.draw();

// //Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         location: {
//             x: 1,
//             y: 1
//         },
//         draw: function() {
//             console.log("Draw");

//         }
//     };
// };

// const factoryCircle = createCircle(1);
// factoryCircle.draw();

// //constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("this: ", this);

//         console.log("Hello Constructor");

//     }
// }
// console.log(Circle);

// const another = new Circle(1);
// another.draw();
// // var gets hoisted but let does not. so if you try to access a let before it gets defined it will throw error whether as a var will print undefined
// // console.log(a, b);

// // var a = 1;
// // let b = 2;
// const a1= 2;
// a1= 3;

// var obj = function () {
//     let i = 0;

//     return {
//         getI: function() {
//             return this.i;
//         },
//         setI: function(k) {
//             i = k;
//         }
//     };
// };

// let x = new obj(2);
// console.log(x);
// bam = 1;
// console.log(bam);



// for (var i=1; i<=5; i++) {
//     console.log("i before setTimeout "+i);

//     setTimeout(function(){
//         console.log("i: "+i);

//     },i*1000);
// }
// function counter(x) {
//     var privateCounter = 0;
//     this.x = x;
// }

// var a = new counter(5);
// console.log(a.privateCounter);
// console.log(a.x);

// function factoryPeople (a, b) {
//     var temp = {
//         a: a,
//         b: b,
//         c: function() {
//             console.log(a + b);
//         }
//     };
//     return temp;
// }

// var person1 = factoryPeople("Hello", "Prakhar");
// var person2 = factoryPeople("Hello", "Pallavi");
// console.log(person2.c());
// console.log(person1.c());
// person2.b = "Monika";
// console.log(person2);

// function factoryPeople1 (a, b) {
//     this.a = a;
//     this.b = b;
//     this.c = function() {
//         console.log(this.a + this.b);
//     }
// }

// var person1 = new factoryPeople1("Hello", "Prakhar");
// var person2 = new factoryPeople1("Hello", "Pallavi");
// console.log(person2.c());
// console.log(person1.c());
// person2.b = "Monika";
// console.log(person2.c());

// function Foo(who){
//     this.me = who;
// }
//
// Foo.prototype.identify = function () {
//     return "I am " + this.me;
// };
//
// var a1 = new Foo("a1");
// var a2 = new Foo("a2");
//
// a2.speak = function () {
//     alert("Hello, " + this.identify() + ".");
// }
// console.log(Object.getPrototypeOf(a1));
// console.log(a1.__proto__);
// console.log(a1.constructor.prototype);
//
// console.log(a1.constructor === Foo);
// console.log(a1.constructor === a2.constructor);
// console.log(a1.__proto__ === Foo.prototype);
// console.log(a1.__proto__ === a2.__proto__);

let arr = [1,2,3,4,5,1,5,4];
let sumArrLeft =[0], sum= 0, sumArrRight = [0], l = arr.length-1;

for(let i =1;i<arr.length-1;i++) {
  // sum = sumArr[i-1] + arr[i-1];
  // sumArr[i-1] = sum;
  // sum = 0;
  sumArrLeft[i] = sumArrLeft[i-1] + arr[i-1];
  sumArrRight[i] = sumArrRight[i-1] + arr[l] ;
  l--;
}
console.log(sumArrLeft);
console.log(sumArrRight);
