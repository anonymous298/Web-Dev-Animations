gsap.from('#page1 .box', {
    scale : 0,
    rotate : 360,
    duration : 1,
    delay : 0.1,
    scrollTrigger : '#page1 .box'
})

gsap.to('#page2 .box', {
    scale : 5,
    rotate : 360,
    duration : 1,
    delay : 0.1,
    scrollTrigger : {
        trigger : '#page2 .box',
        scrub : 1
    }
})

gsap.to('#page3 .box', {
    x : 300,
    // rotate : 360,
    duration : 1,
    delay : 0.1,
    scrollTrigger : {
        trigger : '#page3 .box',
        scrub : 1
    }
})

gsap.from('#page4 .box', {
    scale : 0,
    rotate : 360,
    duration : 1,
    delay : 0.1,
    scrollTrigger : '#page4 .box'
})