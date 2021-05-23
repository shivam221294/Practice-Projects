const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const a= document.getElementById("second");
const btn= document.getElementById("btn");
const color = document.querySelector(".colorName");
btn.addEventListener("click",function(){
    let b="#";
    for(let i=0;i<6;i++){
        b+=hex[getRandomNumber()];
    }
    document.body.style.backgroundColor=b;
    color.textContent=b;

    console.log(b);
})
function getRandomNumber(){
    return Math.floor((Math.random() * hex.length));
}