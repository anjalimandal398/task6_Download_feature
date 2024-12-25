let btn=document.querySelector("button")
let h1=document.querySelector("h1")
let growth=document.querySelector(".growth")
let h2=document.querySelector("h2")
 
let grow=0
btn.addEventListener("click",function(){
    let growInterval = setInterval(function(){
        grow++
         
        h1.innerHTML=grow +"%"
        growth.style.width=`${grow}%`
        

    },60)
setTimeout(function(){
    clearInterval(growInterval)
    btn.innerHTML = 'Downloaded'
    btn.style.opacity=0.2
    btn.style.pointerEvents='none'
    h2.innerHTML="Your file is downloaded"

},6000)
    
})