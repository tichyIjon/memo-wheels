let degWh1 = 0;
let degWh2 = 0;
let degWh3 = 0;

let wh1 = document.querySelector('.wh1');
let wh2 = document.querySelector('.wh2');
let wh3 = document.querySelector('.wh3');

let wheelSelected = 1;

let wh1Scale = 1;
let wh2Scale = 1.23;
let wh3Scale = 1.5;
let transformation = {};




function rotateRight() {
    console.log(wheelSelected);
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
    console.log(wheelSelected);
    if (wheelSelected === 1) {
        degWh1 -= 12;
        transformation = {
            transform : `rotate(${degWh1}deg) scale(${wh1Scale})`,
        };
        Object.assign(wh1.style, transformation);
    } else if (wheelSelected === 2) {
        degWh2 -= 12;
        transformation = {
            transform : `rotate(${degWh2}deg) scale(${wh2Scale})`,
        };
        Object.assign(wh2.style, transformation);
    } else if (wheelSelected === 3) {
        degWh3 -= 12;
        transformation = {
            transform : `rotate(${degWh3}deg) scale(${wh3Scale})`,
        };
        Object.assign(wh3.style, transformation);
    } 

}

function startingPosition() {
    degWh1 = 0;
    degWh2 = 0;
    degWh3 = 0;

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
    console.log(event.key)
    if (event.key === 'd') {
        rotateRight();
    } else if (event.key === 'a') {
        rotateLeft();
    } else if (event.key === '1') {
        wheelSelected = 1;
    } else if (event.key === '2') {
        wheelSelected = 2;
    } else if (event.key === '3') {
        wheelSelected = 3;
    } else if (event.key === 's') {
        startingPosition()
    }

});