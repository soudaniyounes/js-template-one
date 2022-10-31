
//start Local Storage
let myLocalColor=localStorage.getItem("main_color");
//console.log(myLocalColor);
if(myLocalColor !==null){
    //console.log("Local Storage Not Empty");
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("main_color"))
   //Remove class
   document.querySelectorAll(".list-colors li").forEach((element)=>{
   element.classList.remove("active");
   if(element.dataset.color===myLocalColor){
    //add class
    element.classList.add("active");
   }
   });
}
//end Local Storage
//start box-settings
document.querySelector(".toggle-setting .fa-solid").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".box-seting").classList.toggle("open");
    document.querySelector(".box-seting .toggle-setting").classList.toggle("opend");
}
//end box-settings
//start box-colors
let myColor=document.querySelectorAll(".list-colors li");
//console.log(myColor)
myColor.forEach(li => {
    li.addEventListener("click",(e)=>{
        //console.log(e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
        localStorage.setItem("main_color",e.target.dataset.color);
        //remove class
        addRemoveClass(e);
    });
 
});
//end box-colors
//start box-random
let backValue=true;
//start Local storage random option
let myOptionrand=localStorage.getItem("random_option");
if(myOptionrand!==null){
    if(myOptionrand==="true"){
        backValue=true;
    }else{
        backValue=false;
    } 
  document.querySelectorAll(".random-background span").forEach(e =>{
    e.classList.remove("active");
  });
  if(myOptionrand==="true"){
    document.querySelector(".random-background .yes").classList.add("active");
    }else{
    document.querySelector(".random-background .no").classList.add("active");
    } 
}
//end Local storage random option
let BackInterval;
let myRandomBack=document.querySelectorAll(".random-background span");
myRandomBack.forEach(span => {
    span.addEventListener("click",(e)=>{
   addRemoveClass(e);
   if(e.target.dataset.background==="yes"){
    backValue=true;
    funBack();
    localStorage.setItem("random_option",true);
   }else{
    backValue=false;
    clearInterval(BackInterval);
    localStorage.setItem("random_option",false)
   }
   
    });
});
//end box-random
//start landing page
let landingPage=document.querySelector(".landing-page");
let backgroundArray=["img1.jpg","img2.jpg","img4.jpg","img5.jpg","img6.jpg"];
function funBack(){
    if(backValue===true){
        BackInterval=setInterval(function(){
            let numberOfback= Math.floor(Math.random()*backgroundArray.length);
            landingPage.style.backgroundImage='url("photo/'+backgroundArray[ numberOfback]+'")';
        },10000);
    }  
};
funBack();
//end landing page
//start animate skills
let mySkills=document.querySelector(".skills");
let muBUtton=document.querySelector(".box-seting .toggle-setting .fa-solid");

window.onscroll=function(){
   
let mytopskill=mySkills.offsetTop;

let myheightskill=mySkills.offsetHeight;

let myInnerskill=this.innerHeight;

let mySkill=this.pageYOffset;

if(mySkill >= ( mytopskill + myheightskill - myInnerskill)){
let mYfSkill=document.querySelectorAll(" .skill-box .skill-progres span");
mYfSkill.forEach(element=>{
    element.style.width=element.dataset.skill;
});
};
//start my botton design
let myButton=window.pageYOffset;
 
if(myButton >= 576){
  muBUtton.style.setProperty("color","black");
}
if(myButton < 577){
  muBUtton.style.setProperty("color","#fff");
} 

//end my botton design
};
//end animate skills
//start gallery box
let gallery=document.querySelectorAll(".imges-box img");
gallery.forEach(img=>{
img.addEventListener("click",(e)=>{
   // start overley
    let overley=document.createElement("div");
    overley.className="overley-box";
    document.body.appendChild(overley);
  //end overley
  let popupBox=document.createElement("div");
  popupBox.className="popup-Box";
  if(img.alt!== null){
    let myHeading=document.createElement("h3");
    myHeading.className="myHeading";
    let myHeadText=document.createTextNode(img.alt);
    myHeading.appendChild(myHeadText);
    popupBox.appendChild(myHeading);
  }
  let popupImg=document.createElement("img");
  popupImg.src=img.src;
  popupBox.appendChild(popupImg);
  document.body.appendChild(popupBox);
  let myBotton=document.createElement("span");
  myBotton.className="myBotton";
  let myBottonText=document.createTextNode("X");
  myBotton.appendChild(myBottonText);
  popupBox.appendChild(myBotton);
});
});
document.addEventListener("click",function(e){
if(e.target.className === "myBotton"){
e.target.parentNode.remove();
document.querySelector(".overley-box").remove();
}
});
//end gallery box

//start function scroll
let Bullet=document.querySelectorAll(".nav-bullet .bullet"); 

let myLI=document.querySelectorAll(".links li");

function scrollTo(element){
    element.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
               behavior:"smooth",
            });
        })
    })
}
scrollTo(Bullet);
scrollTo(myLI);
//end function scroll
//start function rmove/add class
function addRemoveClass(event){
    event.target.parentElement.querySelectorAll(".active").forEach(elem=>{
        elem.classList.remove("active");
    });
    event.target.classList.add("active");
}
//end function rmove/add class
//start bullet option
let bullet=document.querySelectorAll(".option-box .Test-Option span");
let naVbullet=document.querySelector(".nav-bullet");
let locaLstorageBullet=localStorage.getItem("bullet_option");

if(locaLstorageBullet !== null){
    bullet.forEach(span=>{
        span.classList.remove("active");

        if(locaLstorageBullet==="show"){
            naVbullet.style.display="block";
            document.querySelector(".Test-Option .yes").classList.add("active");
        }else{
            naVbullet.style.display="none";
            document.querySelector(".Test-Option .no").classList.add("active")
        }
    })
}

bullet.forEach(span=>{
span.addEventListener("click",(ele)=>{

if(span.dataset.option==="show"){
naVbullet.style.display="block";
addRemoveClass(ele);
localStorage.setItem("bullet_option","show");
}

if(span.dataset.option==="hide"){
naVbullet.style.display="none";
addRemoveClass(ele);
localStorage.setItem("bullet_option","hide");
}
});
});
//end bullet option
//start reset option
document.querySelector(".reset_option").onclick=function(){
   // localStorage.clear();
    localStorage.removeItem("main_color");
    localStorage.removeItem("random_option");
    localStorage.removeItem("bullet_option");
    window.location.reload();
}
//end reset option
//start toogle menu
let toggleMenu=document.querySelector(".toogle-menu");
let toggleLink=document.querySelector(".links");

toggleMenu.onclick=function(e){
    e.stopPropagation() ;

    this.classList.toggle("menu-active");

    toggleLink.classList.toggle("open");
}

toggleLink.onclick=function(e){
    e.stopPropagation();
}

document.addEventListener("click",(e)=>{

    if(e.target!==toggleMenu && e.target!==toggleLink){
        
        if(toggleLink.classList.contains("open")){

            toggleMenu.classList.remove("menu-active");

            toggleLink.classList.remove("open");
    
        }       
    }  
});
//end toogle menu
let option=document.querySelector(".box-seting");
let toption=document.querySelector(".toggle-setting .fa-solid");

document.addEventListener("click",(e)=>{

    if(e.target!==toption ){
        
        if(option.classList.contains("open")){

     document.querySelector(".box-seting .toggle-setting").classList.toggle("opend");
     option.classList.toggle("open");

        }       
    } 
    if(option.classList.contains("open")){

        toption.style.color="black"

    }        
});