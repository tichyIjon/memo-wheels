console.log(window.innerWidth);

let degWh1 = 0;
let degWh2 = 0;
let degWh3 = 0;

let wh1 = document.querySelector('.wh1');
let wh2 = document.querySelector('.wh2');
let wh3 = document.querySelector('.wh3');
let combination = document.querySelector('.combination');

let wheelSelected = 1;

let wh1Scale = 1;
let wh2Scale = 1.23;
let wh3Scale = 1.5;
let transformation = {};

let symbolsArr = [
    'A','B','C','D','E','F','G','H','I','K','L','M','N',
    'O','P','Q','R','S','T','V','X','Y','Z','Ψ','Φ','ω','Θ',
    'ע','צ','שׁ'
]

let wh1Sym = 0;
let wh2Sym = 0;
let wh3Sym = 0;

function combinationDisplay() {
    console.log(symbolsArr[wh1Sym])
    combination.innerText = `${symbolsArr[wh1Sym]} : ${symbolsArr[wh2Sym]} : ${symbolsArr[wh3Sym]}`
}


function rotateRight() {
    if (wheelSelected === 1) {
        degWh1 += 12;
        transformation = {
            transform : `rotate(${degWh1}deg) scale(${wh1Scale})`,
        };
        Object.assign(wh1.style, transformation);

    } else if (wheelSelected === 2) {
        degWh2 += 12;
        transformation = {
            transform : `rotate(${degWh2}deg) scale(${wh2Scale})`,
        };
        Object.assign(wh2.style, transformation);

    } else if (wheelSelected === 3) {
        degWh3 += 12;
        transformation = {
            transform : `rotate(${degWh3}deg) scale(${wh3Scale})`,
        };
        Object.assign(wh3.style, transformation);
    } 

}

function rotateLeft() {
    if (wheelSelected === 1) {
        if (wh1Sym > 28) {
            wh1Sym = 0;
            degWh1 -= 12;
            transformation = {
                transform : `rotate(${degWh1}deg) scale(${wh1Scale})`,
            };
            Object.assign(wh1.style, transformation);
            combinationDisplay();
        } else {
            degWh1 -= 12;
            wh1Sym += 1;
            transformation = {
                transform : `rotate(${degWh1}deg) scale(${wh1Scale})`,
            };
            Object.assign(wh1.style, transformation);
            combinationDisplay();
        }
    } else if (wheelSelected === 2) {
        if (wh2Sym > 28) {
            wh2Sym = 0
            degWh2 -= 12;
            transformation = {
                transform : `rotate(${degWh2}deg) scale(${wh2Scale})`,
            };
            Object.assign(wh2.style, transformation);
            combinationDisplay();
        } else {
            degWh2 -= 12;
            wh2Sym += 1;
            transformation = {
                transform : `rotate(${degWh2}deg) scale(${wh2Scale})`,
            };
            Object.assign(wh2.style, transformation);
            combinationDisplay();
        }
    } else if (wheelSelected === 3) {
        if (wh3Sym === 29) {
            wh3Sym = 0
            degWh3 -= 12;
            transformation = {
                transform : `rotate(${degWh3}deg) scale(${wh3Scale})`,
            };
            Object.assign(wh3.style, transformation);
            combinationDisplay();
        } else {
            degWh3 -= 12;
            wh3Sym += 1;
            transformation = {
                transform : `rotate(${degWh3}deg) scale(${wh3Scale})`,
            };
            Object.assign(wh3.style, transformation);
            combinationDisplay();
        }
    } 
}

function startingPosition() {
    degWh1 = 0;
    degWh2 = 0;
    degWh3 = 0;
    wh1Sym = 0;
    wh2Sym = 0;
    wh3Sym = 0;
    combinationDisplay();

    transformation = {
        transform : `rotate(${degWh1}deg) scale(${wh1Scale})`,
    }; Object.assign(wh1.style, transformation);

    transformation = {
        transform : `rotate(${degWh2}deg) scale(${wh2Scale})`,
    }; Object.assign(wh2.style, transformation);

    transformation = {
        transform : `rotate(${degWh3}deg) scale(${wh3Scale})`,
    }; Object.assign(wh3.style, transformation);

}

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        rotateRight();
    } else if (event.key === 'a') {
        rotateLeft();
    } else if (event.key === '1') {
        wheelSelected = 1;

        let wh2_ellipse = document.querySelector('.wh2-ellipse') 
        wh2_ellipse.style.fill = '#434541'

        let wh3_ellipse = document.querySelector('.wh3-ellipse') 
        wh3_ellipse.style.fill = '#434541'

        let wh1_ellipse = document.querySelector('.wh1-ellipse') 
        wh1_ellipse.style.fill = '#737373'
    } else if (event.key === '2') {
        wheelSelected = 2;

        let wh1_ellipse = document.querySelector('.wh1-ellipse') 
        wh1_ellipse.style.fill = '#434541'

        let wh3_ellipse = document.querySelector('.wh3-ellipse') 
        wh3_ellipse.style.fill = '#434541'

        let wh2_ellipse = document.querySelector('.wh2-ellipse') 
        wh2_ellipse.style.fill = '#737373'
    } else if (event.key === '3') {
        wheelSelected = 3;

        let wh1_ellipse = document.querySelector('.wh1-ellipse') 
        wh1_ellipse.style.fill = '#434541'

        let wh2_ellipse = document.querySelector('.wh2-ellipse') 
        wh2_ellipse.style.fill = '#434541'

        let wh3_ellipse = document.querySelector('.wh3-ellipse') 
        wh3_ellipse.style.fill = '#737373'
    } else if (event.key === 's') {
        startingPosition()
    }
});