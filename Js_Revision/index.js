// Example 1: Using window.onload event
window.onload = function() {
        this.document.querySelector('h1').style.color = 'blue';
    };  

// Example 2: Using DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').style.color = 'green';
});

// Example 3: Using defer attribute in script tag
document.querySelector('h1').style.color = 'yellow';
const h1Element = document.querySelector('h1');
h1Element.style.color = 'red'; 
// The order of execution will be:
//yellow--red--green--blue

// window.alert("Hello, World!");   
//بدلها ال popup

// Example 4: Using different methods to manipulate DOM
//Using write
document.write("<h1>Welcome to My Website</h1>");
//innerHTML
document.body.innerHTML += "<p>This is a paragraph added using innerHTML.</p>"; 
//textContent
const p = document.createElement('p');
p.textContent = "This is a paragraph added using textContent.";
document.body.appendChild(p);

// Example 5: console logging
console.log("This is a log message.");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.table(["sama","ahmed","mohamed"]);
console.log("%c This is a styled log message.", "color: blue; font-size: 20px; background-color: yellow;");
 

// Example 6:  Data types in JavaScript
console.log(typeof "Hello"); // string
console.log(typeof 5000);// number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof {name: "Sama", age: 20}); // object
console.log(typeof [1, 2, 3, 4, 5]); // object
console.log(typeof null); // object
console.log(typeof function() {}); // function
console.log(typeof Symbol("id")); // symbol
console.log(typeof BigInt(9007199254741991)); // bigint

//Example 7: Variable declarations
var userName = "Sama"; //camal case
console.log(userName);
let user_age = 25; //snake case
console.log(user_age);
const UserCountry = "Egypt"; //pascal case
console.log(UserCountry);

var a=1;
var a=2;
console.log(a); //2
let b=1;
//let b=2;
console.log(b); //error
const c=1;
//c=2;
console.log(c); //error 
 
console.log(x) //undefined
var x=10

// console.log(y) //ReferenceError
let y=10

// console.log(z) //ReferenceError
const z=10

//Example 8: Variable scope
var globalVar = 2;      // function-scoped (also global)
let globalLet = 3;      // block-scoped (global block)
const globalConst = 4;  // block-scoped (global block)

console.log("=== Global Scope ===");
console.log("globalVar:", globalVar);   // 2
console.log("globalLet:", globalLet);   // 3
console.log("globalConst:", globalConst); // 4

// Function to test scopes
function testScopes() {
    var funcVar = 10;     // function-scoped
    let funcLet = 20;     // block-scoped
    const funcConst = 30; // block-scoped

    console.log("\n=== Inside Function ===");
    console.log("funcVar:", funcVar);   // 10
    console.log("funcLet:", funcLet);   // 20
    console.log("funcConst:", funcConst); // 30

    if(true) {
        var blockVar = 100;    // function-scoped → still available in function
        let blockLet = 200;    // block-scoped → only inside this if block
        const blockConst = 300;// block-scoped → only inside this if block

        console.log("\n=== Inside Block ===");
        console.log("blockVar:", blockVar);     // 100
        console.log("blockLet:", blockLet);     // 200
        console.log("blockConst:", blockConst); // 300
    }

    console.log("\n=== Back in Function ===");
    console.log("blockVar:", blockVar); // 100 var still accessible
    // console.log(blockLet); //  Error → let is block-scoped
    // console.log(blockConst); //  Error → const is block-scoped
}

testScopes();

// console.log(funcVar); //  Error → funcVar is function-scoped
// console.log(funcLet); //  Error → funcLet is block-scoped
// console.log(funcConst); // Error → funcConst is block-scoped

//Example 8: String Syntax
console.log('hello')
console.log("hello")
console.log(`hello`)
console.log('Java "Script"');
console.log("Java 'Script'");
console.log(`Java "Script" and 'Script'`);
console.log("She said, \"Hello!\"");
console.log('Hello \\World');
console.log('Hello\
World');
console.log('First Line\nSecond Line');

//Example 9: concatination and interpolation
let firstName = "Sama";
let lastName = "Sayed"; 
console.log("Hello " + firstName + " " + lastName + "!"); // concatination
console.log(`Hello ${firstName} ${lastName}!`); // interpolation    
console.log(firstName, lastName)

//Example 10: Template String
let markup =`
    <div class ="card">
        <h2>${firstName} ${lastName}</h2>
        <p>Welcome to the JavaScript learning session.</p>
    </div>
`;
document.body.innerHTML += markup;
console.log(markup);

let titel = " Welcome to JS Land"
let description = "JavaScript is a programming language."
let date = "25/10"

let markUp = `
<div class="card">
  <h3>${titel}</h3>
    <p>${description}</p>
    <span>${date}</span>
</div>`
document.write(markUp.repeat(4));

//Example 11: Arithmetic Operations
console.log(10+20) //30
console.log(10 + "string")//"10string"
console.log("string" - 10)//"NaN"
console.log("10" + 20)//"1020"
console.log(+"10" + 20)//30
console.log("10" - 5)//5
console.log("10" * 2)//20
console.log(typeof NaN) //number
let num=1;
console.log(++num) //2 pre-increment
console.log(num++) //2 post-increment
console.log(num) //3
console.log(+100)
console.log(+"100")
console.log(+"Hello") //NaN
console.log(+null)  //0
console.log(+undefined) //NaN
console.log(+true) //1
console.log(+false) //0
console.log(Number("100")) //100
console.log(Number("Hello"))//NaN
console.log(Number(null))  //0
console.log(Number(undefined))//NaN 
console.log(Number(true)) //1
console.log(Number(false))//0

//Example 12: Operator Precedence