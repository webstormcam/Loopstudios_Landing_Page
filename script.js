let ham = document.getElementById('ham');
let drop = document.getElementById('dropdown')
let games = document.querySelectorAll('.overlay_block').forEach(item =>{
    item.addEventListener('click', event =>{
    item.style.backgroundColor ='red'
    })
})


ham.addEventListener('click',function(){
if(ham.getAttribute('src') ==='imgs/icon-close.svg'){
    ham.src = 'imgs/icon-hamburger.svg'
    drop.classList.remove('animate__fadeIn')
    drop.classList.add('animate__fadeOut')
    // drop.style.display='none'
    
    
 
} else{
    ham.src = 'imgs/icon-close.svg'
    drop.style.display='flex'
    drop.classList.add('animate__fadeIn')
    drop.classList.remove('animate__fadeOut')

    
}
});




// games.addEventListener('mouseover',function(){
//     console.log('hello')
//     games.style.backgroundColor ='red'
// });

// games.addEventListener('mouseout',function(){
//     console.log('good bye')
//     games.style.backgroundColor ='intial'
// });