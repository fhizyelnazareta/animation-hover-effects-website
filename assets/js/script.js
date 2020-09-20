/* Script Effect for animation*/
document.addEventListener('mousemove', function (e) {
    const body = document.querySelector('body');
    const bubbles = document.createElement('span');

    // penerapan effect
    bubbles.style.left = -75 + e.offsetX + 'px';
    bubbles.style.top = -75 + e.offsetY + 'px';

    // menambahkan element baru pada body
    body.appendChild(bubbles);
});

