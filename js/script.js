const body=document.querySelector('body'),
 navMenu=body.querySelector('.menu-content'),
 navClosebtn=body.querySelector('.navclose-btn'),
 navOpenbtn=body.querySelector('.navopen-btn')

 if(navMenu&&navOpenbtn){
    navOpenbtn.addEventListener("click",()=>{
        navMenu.classList.add("open")
        body.style.overflowY="hidden";
    })
 }
 if(navMenu&&navClosebtn){
    navClosebtn.addEventListener("click",()=>{
        navMenu.classList.remove("open")
         body.style.overflowY="scroll";
    })
 }