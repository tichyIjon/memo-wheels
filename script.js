let degOuter = 0;
let degInner = 0;
let currentWheel;
const wheel = document.querySelector('.wheel');
const innerWheel = document.querySelector('.wh1')
const outerWheel = document.querySelector('.wh2')

let combination;


function rotateRight() {
    if (currentWheel === 'inner') {
        degInner += 12;
        innerWheel.style.transition = 'all 0.2s ease-out';
        innerWheel.style.transform = `rotate(${degInner}deg)`;

    } else if (currentWheel === 'outer') {
        degOuter += 12;
        outerWheel.style.transition = 'all 0.2s ease-out';
        outerWheel.style.transform = `rotate(${degOuter}deg)`;
    }


}

function rotateLeft() {
    if (currentWheel === 'inner') {
        degInner -= 12;
        innerWheel.style.transition = 'all 0.2s ease-out';
        innerWheel.style.transform = `rotate(${degInner}deg)`;

    } else if (currentWheel === 'outer') {
        degOuter -= 12;
        outerWheel.style.transition = 'all 0.2s ease-out';
        outerWheel.style.transform = `rotate(${degOuter}deg)`;
    }

}

function changeWhellToInner() {
    currentWheel = 'inner';
    innerWheel.style.border = '3px solid red'
    outerWheel.style.border = '3px solid green'
}

function changeWhellToOuter() {
    currentWheel = 'outer';
    outerWheel.style.border = '3px solid red'
    innerWheel.style.border = '3px solid green'
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key === 'ArrowLeft') {
        console.log('rotating left!')
        rotateLeft();
    } else if (event.key === 'ArrowRight') {
        console.log('rotating right!')
        rotateRight();
    } else if (event.key === 'i') {
        changeWhellToInner();
        console.log(currentWheel);
    } else if (event.key === 'o') {
        changeWhellToOuter();
        console.log(currentWheel);
    }
  });

