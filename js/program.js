"use strict"

window.addEventListener('DOMContentLoaded', ()=>{
    const picBlock = document.querySelectorAll('.program__contentPicBlock');
    let picBlockCount = picBlock.length;

    picBlock.forEach((item,index)=>{
        item.style.zIndex =  picBlockCount - index;
    })
})