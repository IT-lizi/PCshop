window.addEventListener('load', function() {
    var mask = document.querySelector('.mask');

    var img = document.querySelector('.preview-img');
    var big = document.querySelector('.big');
    img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    img.addEventListener('mouseout', function() {

        mask.style.display = 'none';
        big.style.display = 'none';
    })

    img.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX > maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY > maskMax) {
            maskY = maskMax;
        }
        mask.style.top = maskY + 'px';
        mask.style.left = maskX + 'px';

        var bigImg = document.querySelector('.big_Img');
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.top = -bigY + 'px';
        bigImg.style.left = -bigX + 'px';

    })
})