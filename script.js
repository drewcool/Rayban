function ScrollingImages(){
    Shery.imageEffect("#back", {
        style: 5,
        scrollSnapping: true,
        scrollSpeed: 6,
        touchSpeed: 6,
        damping: 7,
        config:
        {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.957732053147149},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.009674267887045061},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":2},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}

      });
}

ScrollingImages()

function MagnetElem(){
    Shery.makeMagnet("nav a" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      }); 
}
MagnetElem()

var tl = gsap.timeline()
tl.from("nav img",{
    y:"-30",
    duration:0.5,
    opacity:0,
    delay:0.8
})

tl.from("nav a",{
    y:"-30",
    duration:0.6,
    opacity:0,
    delay:0.8,
    stagger:.2
},"-=1")

tl.from(".elem h1",{
    opacity:0
},"-=1")
tl.from("#heroleft button",{
    opacity:0
})

tl.from("#heroright p",{
    opacity:0
},"-=1")

tl.from("#heroright #imgdiv",{
    x:"30",
    opacity:0,
},"-=1")






   


       



    
    
      
      