"use strict";

const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// const deleteElement = (e) => {
//     e.target.remove();
// }; 

// btn.addEventListener('mouseenter', (e, ) => {
//     console.log(e.target);
//     e.target.remove();
//     // alert('Element Hovered');
// });


// btn.addEventListener('mouseleave', () => {
//     alert('Element Unhovered');
// });

let i = 0;

const viewElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btn.removeEventListener('click', (viewElement));
    // }
};

// btn.addEventListener('click', viewElement);
// overlay.addEventListener('click', viewElement);

btns.forEach(btn => {
    btn.addEventListener('click', viewElement, {once: true});
    });

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});