"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// const num = 400;

// box.style.cssText = `background-color: blue; width: ${num}px`;
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < circles.length; i++) {
//     circles[i].style.backgroundColor = 'purple';
// }
hearts.forEach(item => { 
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hello world');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(circles[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = 'Good night'; //не воспринимает HTML структуру/теги

// div.insertAdjacentHTML("afterend", '<h2>AEW</h2>');
// div.insertAdjacentHTML("beforebegin", '<h2>AEW</h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>AEW</h2>');
// div.insertAdjacentHTML("beforend", '<h2>AEW</h2>');