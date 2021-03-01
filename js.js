document.addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelector('#btn');
    window.addEventListener('scroll',()=>{
        window.navigator.vibrate(1);
    })
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        window.navigator.vibrate(99999);
    })
})