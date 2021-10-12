window.addEventListener("DOMContentLoaded", ()=>{
    const offer__formBlock = document.querySelectorAll('.offer__formBlock');
    const question__formName = document.querySelectorAll('.question__formBlock');

    offer__formBlock.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.classList.add('offer__inpName-active');
        })
    })
    question__formName.forEach(item=>{
        item.addEventListener('click', ()=>{
            item.classList.add('question__formBlock-active');
        })
    })

})