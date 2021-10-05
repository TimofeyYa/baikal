'use strict'

window.addEventListener('DOMContentLoaded', ()=>{
    const faq__blockTop = document.querySelectorAll('.faq__blockTop');
    const selectItem = [];

    faq__blockTop.forEach((item, index)=>{
        selectItem.push(0);

        item.addEventListener('click', ()=>{
            const btn = item.querySelector('.faq__blockBtn'),
                  txt = item.parentElement.querySelector('.faq__blockDesc');

            if (!selectItem[index]){   
                btn.classList.add('faq__blockBtn-active');
                txt.style.display = 'block';
                selectItem[index] = 1;
            } else {
                btn.classList.remove('faq__blockBtn-active');
                txt.style.display = 'none';
                selectItem[index] = 0;
            }
            


        })
    })
})