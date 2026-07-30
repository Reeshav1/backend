const btn=document.querySelector(".btn")
let showText = document.querySelector(".curse")

let curses= ["laudena bhujyam","behen ke lode","fucking failure","what a dogshit coder","ye garib teri maki chut "]

btn.addEventListener("click",()=>{
    let num=Math.floor(Math.random()*5);
    showText.innerHTML=`${curses[num]}`
    console.log(curses[num]);
})

