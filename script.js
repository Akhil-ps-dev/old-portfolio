const header = document.querySelector('header');

window.addEventListener("scroll",function(){

header.classList.toggle("sticky",window.scrollY >0);

});

var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onClick = ()=>{
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');


};
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}