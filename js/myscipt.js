
var loader = document.querySelector('.pre_section')
var loader_detail = document.querySelector('.pre_duration')
var home = document.querySelector('.web_section');

loader.classList.add('display')
var valueCount = 0;

var stopTime = setInterval(function(){
    valueCount = valueCount + 1;
    loader_detail.textContent = valueCount + '%';

    if (valueCount === 100) {
        loader.classList.remove('display')
        clearInterval(stopTime)
        home.classList.add('display')
    }
}, 15)