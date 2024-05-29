document.addEventListener('touchstart', e => {
    console.log('start');
})

document.addEventListener('touchmove', e => {
    console.log('move');
})

document.addEventListener('touchend', e => {
    console.log('end');
})