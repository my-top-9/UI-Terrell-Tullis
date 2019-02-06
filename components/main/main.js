let leftContent = document.querySelectorAll('.left-content');
let rightContent = document.querySelectorAll('.right-content');
let topNine = document.querySelector('.top-contentBG')

console.log(topNine)

//articles stagger from left
let leftContentArr = Array.from(leftContent);
TweenMax.staggerFrom(leftContentArr, 2, {opacity: 0, x: -100, ease:Bounce.easeOut, delay: 2}, 0.4);
let rightContentArr = Array.from(rightContent);
TweenMax.staggerFrom(rightContentArr, 2, {opacity: 0, x: -100, ease:Bounce.easeOut, delay: 2.2}, 0.4);

//Top Nine and buttons
TweenMax.from(topNine, 1, {y: -500})
