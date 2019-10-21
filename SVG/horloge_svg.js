var sec = document.querySelector('.sec')
    setInterval(f, 1000)
    var angle = 0
    function f() {
        sec.style.transform = 'rotate(' + angle + 'deg)'
        angle += 6;
        if(angle == 360)
            angle = 0
    }
    var ns = 'http://www.w3.http://www.w3.org/2000/svg';
    var grad = document.createElementNS(ns, 'line')
    grad.setAttribute('x1', 0)
    grad.setAttribute('y1', 45)
    grad.setAttribute('x2', 0)
    grad.setAttribute('y2', 46)
    grad.classList.add('grad')
    var svg = document.querySelector('#out');
    svg.appendChild(grad);