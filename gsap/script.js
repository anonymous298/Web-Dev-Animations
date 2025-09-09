// console.log(gsap)

// gsap.to('#box', {
//     x:800,
//     duration : 1,
//     delay : 2,
//     backgroundColor : 'purple',
//     borderRadius : '50%',
//     rotate : 360,
//     scale : 1
// })

// gsap.from('#box', {
//     x:800,
//     duration : 1,
//     delay : 3,
//     backgroundColor : 'purple',
//     borderRadius : '50%',
//     rotate : 360,
//     scale : 1
// })

let tl = gsap.timeline()

tl.from('h1', {
    y :50,
    opacity : 0,
    duration : 1,
    delay : 1,
    stragger : 1
})
