// Normal Fonksiyon

function Topla(a,b){
    return a+b
}

//Array Function
const topla = (a,b) =>{
    return a+b
}

const cıkar = (a,b) => a-b

const number = [1,2,3,4,5];

//Normal Fonksiyon
const kareler1=number.map( function(number){
    return number * number
})

//Array Function
const kareler2 =number.map( number => number * number )

console.log(topla(10,7))
console.log(cıkar(10,7))
console.log(kareler1)
console.log(kareler2)

//Normal Fonksıyon
const obj = {
  name: 'John',
  greet: function() {
    setTimeout(function() {
      console.log(`Hello, my name is ${this.name}.`);
    }, 1000);
  }
};

obj.greet(); // "Hello, my name is undefined."


//Array Function
const obj2 = {
  name: 'John',
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}.`);
    }, 1000);
  }
};

obj2.greet(); // "Hello, my name is John."



//4 farklı butona da AddListener özelliği eklememize yarayan Array Function
let elements = document.querySelectorAll('.btn')

let clickEvent= () =>{
    console.log("Herhangi bir butona tıkladınız.")
}


elements.forEach((item) => {
    item.addEventListener('click',clickEvent)
});