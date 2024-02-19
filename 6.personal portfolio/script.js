let menubtn=document.getElementById("menubar");

menubtn.addEventListener("click",function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

let typed=new Typed('.auto-input',{
    strings:['Front-End Developer','JAVA Developer','Quick Learner'],
    typeSpeed:50,
    backSpeed:30,
    backDelay:1000,
    loop:true,
})