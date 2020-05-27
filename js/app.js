window.addEventListener("load" , () => {
  const preload = document.querySelector(".preload");
  preload.classList.add('preload-finish')
  document.body.style.overflow = "visible";

const t1 = new TimelineLite();
t1.fromTo(".main",0.6,{opacity :0 , x : -30},{opacity:1 , x : 0}, '-=0.5')
.fromTo(".avatar",0.7,{opacity :0 },{opacity:1});

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




