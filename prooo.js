// console.log("Hello World")
const first=1;
const second=2;
console.log(first);
const str="pavithra";
console.log(str);
const fruits=["apple","banana","grapes"];
console.log(fruits[0]);
fruits[1]="orange";
console.log(fruits[1]);
const arr=[1,"name",false,2.4];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}   
const fourth= document.getElementById("ptag");
fourth.innerHTML="this is my fourth class"
function  newFunction(){
    console.log("this is a new function");
}

const input=document.getElementById("eventListener")
const output=document.getElementById("ptag")
input.addEventListener("input",()=>{
    output.textContent = input.value
})
// const newvar= document.createElement("h1");
// newvar.textContent="this is a new variable";
// document.body.appendChild(newvar);
const newvar= document.createElement("h1");
newvar.textContent="this is a new variable";
document.body.appendChild(newvar);
newvar.remove()