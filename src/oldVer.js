window.onload = function () {
    document.getElementById('page0').style.top = 0;
}


const MOVE = document.getElementById('scroller');
document.documentElement.classList.add('js');
MOVE.addEventListener('input', () => {
    MOVE.style.setProperty('--val', MOVE.value);
}, false);


function scroller() {
    document.getElementById('scroller').addEventListener('input', () => {
        if (document.getElementById('scroller').value == 2) {
            document.getElementById('page0').style.transition = "top 0.8s ease-in-out 0s";
            document.getElementById('page0').style.top = '-100%';
            document.getElementById('page1').style.transition = "top 0.8s ease-in-out 0s";
            document.getElementById('page1').style.top = '-100%';
            document.getElementById('page2').style.transition = "top 0.8s ease-in-out 0s";
            document.getElementById('page2').style.top = 0;
            document.getElementById('page3').style.transition = "right 0.8s ease-in-out 0s";
            document.getElementById('page3').style.top = 0;
            document.getElementById('page3').style.right = '100%';
            document.getElementById('page4').style.transition = "right 0.8s ease-in-out 0s";
            document.getElementById('page4').style.right = '100%';
        }
        if (document.getElementById('scroller').value == 1) {
            document.getElementById('page3').style.transition = "right 0.8s ease-in-out 0s";
            document.getElementById('page3').style.top = 0;
            document.getElementById('page3').style.right = 0;
            document.getElementById('page4').style.transition = "right 0.8s ease-in-out 0s";
            document.getElementById('page4').style.top = 0;
            document.getElementById('page4').style.right = '100%';
        }
        if (document.getElementById('scroller').value == 0) {
            document.getElementById('page4').style.transition = "right 0.8s ease-in-out 0s";
            document.getElementById('page4').style.top = 0;
            document.getElementById('page4').style.right = 0;
        }
    }, false)
}
scroller();


function moveSlide() {
    if (document.getElementsByClassName('vertSlider')[0].checked) {
        document.getElementById('page0').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page0').style.top = 0;
        document.getElementById('page1').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page1').style.top = '100%';
        document.getElementById('iceCube1slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube1slide1').style.top = '700px';
        document.getElementById('iceCube2slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube2slide1').style.top = '700px';
        document.getElementById('iceCube3slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube3slide1').style.top = '700px';
        document.getElementById('iceCube4slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube4slide1').style.top = '700px';
        document.getElementById('page2').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page2').style.top = '100%';
    }
    if (document.getElementsByClassName('vertSlider')[1].checked) {
        document.getElementById('page0').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page0').style.top = '-100%';
        document.getElementById('page1').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page1').style.top = 0;
        document.getElementById('iceCube1slide1').style.transition = "top 0.8s ease-in-out 0.1s";
        document.getElementById('iceCube1slide1').style.top = '350px';
        document.getElementById('iceCube2slide1').style.transition = "top 0.8s ease-in-out 0.1s";
        document.getElementById('iceCube2slide1').style.top = '140px';
        document.getElementById('iceCube3slide1').style.transition = "top 0.8s ease-in-out 0.1s";
        document.getElementById('iceCube3slide1').style.top = '560px';
        document.getElementById('iceCube4slide1').style.transition = "top 0.8s ease-in-out 0.1s";
        document.getElementById('iceCube4slide1').style.top = '-90px';
        document.getElementById('page2').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page2').style.top = '100%';
        document.getElementById('scroller').style.transition = "opacity 0.3s 0s";
        document.getElementById('scroller').style.opacity = 0;
    }
    if (document.getElementsByClassName('vertSlider')[2].checked) {
        document.getElementById('page0').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page0').style.top = '-100%';
        document.getElementById('page1').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page1').style.top = '-100%';
        document.getElementById('iceCube1slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube1slide1').style.top = '700px';
        document.getElementById('iceCube2slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube2slide1').style.top = '700px';
        document.getElementById('iceCube3slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube3slide1').style.top = '700px';
        document.getElementById('iceCube4slide1').style.transition = "top 1s ease-in-out 0.2s";
        document.getElementById('iceCube4slide1').style.top = '700px';
        document.getElementById('page2').style.transition = "top 0.8s ease-in-out 0s";
        document.getElementById('page2').style.top = 0;
        document.getElementById('page3').style.right = '100%';
        document.getElementById('page4').style.transition = "right 0.8s ease-in-out 0s";
        document.getElementById('page4').style.right = '100%';
        document.getElementById('scroller').style.transition = "opacity 1.8s 0s";
        document.getElementById('scroller').style.opacity = 1;
    }
}


let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1, Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;
var i = 0;
var directionNew = '';
var directionOld = '';
const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
const gestureZone = document.getElementsByTagName('body')[0];
gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);
gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
    directionOld = '';
}, false);


function handleGesture(event) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
        if (y < 0) {
            directionNew = 'top';
        }
        if (y > 0) {
            directionNew = 'bottom';
        }
    }
    if (directionOld != directionNew && Math.abs(y) > 150) {
        directionOld = directionNew;
        if (i > 0 && directionOld == 'bottom') {
            document.getElementsByClassName('vertSlider')[i - 1].checked = true;
            i--;
            moveSlide()
        }
        if (i < 2 && directionOld == 'top') {
            document.getElementsByClassName('vertSlider')[i + 1].checked = true;
            i++;
            moveSlide()
            if (i == 2) {
                document.getElementById('scroller').value = 2;
                document.getElementById('scroller').style.setProperty('--val', 2);
            }
        }
    }
}