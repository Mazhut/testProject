// touchstart — касание к элементу
// touchmove — палец двигается по элементу
// touchend — как только касаение прекратилось
// touchenter — когда ведем пальцом по экрану и нажимаем на элемент на которое повешено событие
// touchleave — ушел за пределы элемента
// touchcancel — когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });


    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });


    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });
});

// touches список всех пальцев на экране (неважно, где находятся)
// targetTouches все пальцы которые взаимодействуют с элементом
// changedTouches список пальцев, которые участвуют в текущем событии