let outsideArticles = document.querySelectorAll('.outside-articles');
let middleArticles = document.querySelectorAll('.middle-articles');
let topNine = document.querySelector('.top-contentBG')
let signUpBtn = document.querySelector('.signup')
let loginBtn = document.querySelector('.login')

console.log(signUpBtn)

//articles stagger from left
let outsideArticlesArr = Array.from(outsideArticles);
TweenMax.staggerFrom(outsideArticlesArr, 2, {opacity: 0, x: -100, ease:Bounce.easeOut, delay: 2}, 0.4);
let middleArticlesArr = Array.from(middleArticles);
TweenMax.staggerFrom(middleArticlesArr, 2, {opacity: 0, x: -100, ease:Bounce.easeOut, delay: 2.2}, 0.4);

//Top Nine and buttons
TweenMax.from(topNine, 1, {y: -500})

//SignUp Btn
signUpBtn.addEventListener('mouseover', (e) =>{
    TweenMax.to(e.target, .7, {opacity: .6, scale: 1.3, y: -10})
  })
  signUpBtn.addEventListener('mouseout', (e) =>{
    TweenMax.to(e.target, .5, {opacity: 1, scale: 1, y: 0})
  })

  //Login Button

  loginBtn.addEventListener('mouseover', (e) =>{
    TweenMax.to(e.target, .7, {opacity: .6, scale: 1.3, y: -10})
  })
  loginBtn.addEventListener('mouseout', (e) =>{
    TweenMax.to(e.target, .5, {opacity: 1, scale: 1, y: 0})
  })
