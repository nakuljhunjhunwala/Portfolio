window.addEventListener("load" , () => {
  const preload = document.querySelector(".preload");
  preload.classList.add('preload-finish')
  document.body.style.overflow = "visible";

const t1 = new TimelineLite();
t1.fromTo(".main",0.6,{opacity :0 , x : -30},{opacity:1 , x : 0}, '-=0.5')
.fromTo(".avatar",0.7,{opacity :0 },{opacity:1});

})




const moonPath = "M21.5 43.5C21.5 66.9721 42.5 86 42.5 86C19.0279 86 0 66.9721 0 43.5C0 20.0279 19.0279 0.999998 42.5 0.999998C42.5 -1 21.5 20.0279 21.5 43.5Z"

const sunPath = "M85 42.5C85 65.9721 65.9721 85 42.5 85C19.0279 85 0 65.9721 0 42.5C0 19.0279 19.0279 0 42.5 0C65.9721 0 85 19.0279 85 42.5Z"

let toggle = true;

const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click" , ()=> {


const d1 = anime.timeline({
  duration : 750,
  ease : "easeOutExpo"
})

d1.add({
targets: ".sun",
d:[{value: toggle ? moonPath : sunPath}]
})
.add({
  targets: ".dark-mode",
  rotate: 320,
}, "-=450")
.add({
  targets: [".navbar","body"],
  backgroundColor : toggle ? "#121212" : "rgb(255,255,255)",
  color:"#DCDCDC"
}, "-=700")
.add({
  targets: ".toblack",
  background : toggle ? "#1E1E1E" : "#0083B0",
}, "-=700")
.add({
  targets: ".towhite",
  color: toggle ? "#DCDCDC" : " rgb(0,0,0)"
}, "-=700")
.add({
  targets: ".contact-detail",
  background: toggle ? "#272727" : "#130f40"
}, "-=700")
.add({
  targets: ".technologys",
  background: toggle ? "#272727" : "rgb(255,255,255)",
  color: toggle ? "#DCDCDC" : " rgb(65, 65, 65)"
}, "-=700")
.add({
  targets: ".navbar-light",
  background: toggle ? "#272727" : "rgb(255,255,255)"
}, "-=700");

setTimeout(()=>{ 
  document.querySelector(".dava").src = toggle ? "images/mf-avatar.svg" : "images/dmf-avatar.svg";
  document.querySelector(".dhome").src = toggle ? "images/homepage.svg" : "images/dhomepage.svg"; }, 300);

  toggle =!toggle;


})


// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


const homepage = document.querySelector("#homepage")


var ctrl = new ScrollMagic.Controller();



const t2 = new TimelineLite();

t2.from(".profile-container",0.8,{opacity :0 , y : -70 });

new ScrollMagic.Scene({
    triggerElement : ".about"
})
.setTween(t2)
.addTo(ctrl);


const t3 = new TimelineLite();

t3.from(".info",0.8,{opacity : 0 });

new ScrollMagic.Scene({
    triggerElement : ".technologys"
})
.setTween(t3)
.addTo(ctrl);

const t4 = new TimelineLite();

t4.from(".project .card",0.8,{opacity : 0 });

new ScrollMagic.Scene({
    triggerElement : ".projects"
})
.setTween(t4)
.addTo(ctrl);




