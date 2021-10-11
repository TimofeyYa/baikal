window.addEventListener('DOMContentLoaded', ()=>{
    const numDay = document.querySelectorAll('.numDay');

    numDay.forEach((item, index)=>{
        item.innerHTML = index + 1;
    })


    // Анимация при скролл 
    const startAnim = document.querySelectorAll('.startAnim'),
          startBlock = document.querySelectorAll('.startBlock');

    console.dir(startBlock[0]);
    
    function showElem(elem){
        if (window.scrollY > elem.offsetTop + 100){
            
            let startAnimChild = elem.querySelectorAll('.startAnim');

            startAnimChild.forEach(item =>{
                item.classList.add('endAnim');
            })
        }
    }
    window.addEventListener('scroll', showElem(startBlock[0]) )
   
})