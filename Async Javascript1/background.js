const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }

    return color;
}
let interval

const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
}
const startChangingcolor = function(){
    if(!interval) {
        interval = setInterval(changeBGcolor, 2000);
    }
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}

document.querySelector('#start').addEventListener('click',startChangingcolor, false);
document.querySelector('#stop').addEventListener('click',stopChangingColor, false);

