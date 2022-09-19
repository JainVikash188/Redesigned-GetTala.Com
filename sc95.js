function show(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

show();



var menu = document.querySelector("#menu")
var full = document.querySelector("#fullscreen-nav")
var nav = document.querySelector("#nav>h3")
var nav1 = document.querySelector("#nav-part2>h3")
var l1 = document.querySelector("#line1")
var l2 = document.querySelector("#line2")
var flag = 0;

menu.addEventListener("click",function(){
  console.log("activated")

if(flag===0){
  full.style.transform = `translateY(0%)`
  nav.style.color = "orange"
  nav1.style.color = "orange"
  l1.style. backgroundColor = "orange"
  l2.style. backgroundColor = "orange"
  flag = 1;
}

else{
  full.style.transform = `translateY(-100%)`

  flag = 0;
}  
})

var tl = gsap.timeline();

tl.from("#main-text",{
  opacity: 0,
  duration:2,
  onStart: function(){
    $('#main-text').textillate({ in: { effect: 'fadeInUp' } });
  }
})




tl.from("#sub-text > h3",{
  opacity: 0,
  duration:2,
  onStart: function(){
    $('#sub-text > h3').textillate({ in: { effect: 'fadeInUp' } },
    "-=.0001");
  }
})

tl.from("#maintextright > h3",{
  opacity: 0,
  duration:2,
  onStart: function(){
    $('#maintextright > h3').textillate({ in: { effect: 'fadeInUp' } },
    "-=.001");
  }
})




var side = document.querySelector("#menu");

side.addEventListener("click",function(){
  // console.log("activated")

var ti = gsap.timeline();
ti.from("#side h1",{
  opacity: 0,
  duration:2,
  onStart: function(){
    $('#side h1').textillate({ in: { effect: 'fadeInUp' } },
    "-=.001");
  }
})
})

// gsap.from("#ctnP3", {

//   opacity:1,
//   duration:5,
//   scale: 10,
//   ease:  Expo.easeInOut,

//   scrollTrigger: {
//     trigger: "#ctnP3",
//     scroller: "#page3",
//     markers: true,
//     // start:"top 60%",
//     scrub: true
// }
  
  

// })



gsap.from("#nav3",{
  opacity:0,
  rotateX:"40deg",
  duration:3,
  scrollTrigger: {
    trigger: "#nav3",
    scroller: "#main",
    // markers: true,
    start:"top 20%",
    // scrub: true
}
       
})


gsap.set("#words",{
  opacity : 0
})

 
gsap.from("#rightside",{
  width : "0%",
  duration : 3,
  ease: Expo.easeInOut,
  delay: 2,

  })

  gsap.to("#rightside",{
    left: "100%",
    duration : 2,
    ease: Expo.easeInOut,
    delay: 2.5
  })

  gsap.to("#words",{
      opacity : 1,
      y: "10px",
      ease: Expo.easeInOut,
      duration : 4 ,
      delay : 4.5 ,
      stagger : 2,
      scrollTrigger: {
        trigger: "#rightside",
        scroller: "#page4",
        // markers: true,
        start:"top 90%",
        // scrub: true
        // end:"bottom 20%"
    }
  })

  document.querySelector("#words");
  addEventListener("mousemove",function(dets){
     document.querySelector(".circle").style.top = `${dets.y}px`
 
     document.querySelector(".circle").style.left = `${dets.x}px`

    //  document.querySelector(".circle").style.opacity = `${1}px`
  })

  // addEventListener("",function(dets){
  //   document.querySelector(".circle").style.top = `${dets.y}px`
  // })

  function enter(){
    document.querySelector(".circle").style.display = "flex";
  }

  function out(){
    document.querySelector(".circle").style.display = "none";
  }

  