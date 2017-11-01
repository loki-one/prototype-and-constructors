function Dog(name){
  //this is set to an empty object {}
  //this is returned
  this.name = name;
  //To remove redundant fetch function and add it to Dog.prototype instead.
  //this.fetch = function(){};
}

//prototype makes is easier to distinguish between shared and unique properties
Dog.prototype.fetch = function(){
  console.log('fetch inside of Dog.prototype');
};
// var testDog = new Dog('test dog');
// console.log(testDog);

var myDog = new Dog('Alexis');
var randomDog = new Dog('Hey');

console.log(Object.getPrototypeOf(myDog));
console.log(Object.getPrototypeOf(myDog) === Dog.prototype);
console.log(Object.getPrototypeOf(Dog.prototype));
