window.addEventListener('DOMContentLoaded', ()=>{
    // работа с хеадером
    const header__nav = document.querySelector('.header__nav'),
          header__navMob =document.querySelector('.header__navMob svg'),
          header__mobMenu = document.querySelector('.header__mobMenu svg');

    header__mobMenu.addEventListener('click', ()=>{
        header__nav.classList.add('header__nav-active');
        setTimeout(()=>{
            header__nav.classList.add('header__nav-border');
            
        }, 200);
        
    })
    header__navMob.addEventListener('click', ()=>{
        header__nav.classList.remove('header__nav-active');
        setTimeout(()=>{
            header__nav.classList.remove('header__nav-border');
        }, 10);
        
    })



    const numDay = document.querySelectorAll('.numDay');

    numDay.forEach((item, index)=>{
        item.innerHTML = index + 1;
    })


    // Анимация при скролл 
    const startAnim = document.querySelectorAll('.startAnim'),
          startBlock = document.querySelectorAll('.startBlock');

    console.dir(startBlock[0]);
    
    function showElem(elem){
        window.addEventListener('scroll',()=>{
            if (window.scrollY > elem.offsetTop - window.screen.height /6){
            
            let startAnimChild = elem.querySelectorAll('.startAnim');

            startAnimChild.forEach(item =>{
                item.classList.add('endAnim');
            })
        }
        })
        
    }
    startBlock.forEach(item=>{
        showElem(item);
    })

    // likes

    const package__like = document.querySelector('.package__like');
    const package = document.querySelector('.package');

    let lastScroll = window.scrollY;

    window.addEventListener('scroll', ()=>{
        if (lastScroll < window.scrollY){
            if(window.scrollY +  window.screen.height + 400 > package.offsetTop){
             package__like.classList.add('package__like-play');
        setTimeout(()=>{
            package__like.classList.remove('package__like-play');
        }, 30)
        }
        lastScroll =window.scrollY;
        } else {
            lastScroll =window.scrollY;
        }   
    })

    // слайдер

    const slider__trackBlock = document.querySelectorAll('.slider__trackBlock'),
          slider__track = document.querySelector('.slider__track');

    let marginBlocks = 60;

    const controlLeft = document.querySelector('.slider__control-left'),
          controlRight = document.querySelector('.slider__control-right');
          
    slider__trackBlock.forEach(item=>{
        item.style.marginRight = marginBlocks + 'px';
    })
          console.dir(slider__trackBlock);
    slider__track.style.paddingLeft = ((window.screen.width - 10)/2 - slider__trackBlock[0].clientWidth/2) + 'px';
   

    let x = 0
    controlLeft.addEventListener('click', ()=>{
         x -=marginBlocks + slider__trackBlock[0].clientWidth;
        console.log(x);
        slider__track.style.transform =`translate(-${x}px,0)`;
    })
    controlRight.addEventListener('click', ()=>{
        x +=marginBlocks + slider__trackBlock[0].clientWidth;
       console.log(x);
       slider__track.style.transform =`translate(-${x}px,0)`;
   })
})