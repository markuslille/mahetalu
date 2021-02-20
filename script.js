window.onscroll = function(){
  if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.header-container').style.opacity = '0' 
  } else {
      document.querySelector('.header-container').style.opacity = '1'
  }
/*   var scrollTop = $window.scrollTop();
  instances.forEach(function(inst){
    inst.update(scrollTop);
  }); */
}



const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    panel.classList.toggle('active')
  })
})

document.getElementById('year').innerHTML = `Mahetalu ${new Date().getFullYear()}`;


