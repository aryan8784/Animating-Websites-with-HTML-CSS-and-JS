let cursor = document.querySelector("#cursor")
let cursorBlur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px" 
    cursorBlur.style.left = dets.x -200 + "px"
    cursorBlur.style.top = dets.y -200 + "px"
})

let h5all = document.querySelectorAll("#nav h5")
h5all.forEach(function(elem){
elem.addEventListener("mouseenter",function(){
    cursor.style.scale = 3
    cursor.style.border ="1px solid #fff"
    cursor.style.backgroundColor = "transparent"
})
elem.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.border ="0px solid #95c11e"
    cursor.style.backgroundColor = "#95c11e"
})
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "80px",
    duration: "0.6",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -40%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });
  