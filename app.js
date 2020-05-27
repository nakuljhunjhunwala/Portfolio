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

const t1 = new TimelineLite();

t1.fromTo(".main",1,{opacity :0 , x : -100},{opacity:1 , x : 0})
.fromTo(".avatar",0.5,{opacity :0 },{opacity:1});



var ctrl = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement : ".main"
})
.setTween(t1)
.addIndicators()
.addTo(ctrl);


const t2 = new TimelineLite();

t2.from(".profile-container",1,{opacity :0 , y : -100 });

new ScrollMagic.Scene({
    triggerElement : ".about"
})
.setTween(t2)
.addIndicators()
.addTo(ctrl);





