window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var arrowl = this.document.querySelector('.arrow-l');
    var arrowr = this.document.querySelector('.arrow-r');

    var focusWidth = focus.offsetWidth;
    var num = 0;
    var circle = 0;
    //节流阀
    var flag = true;


    focus.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function() {
            //手动调用点击事件
            arrowr.click();
        }, 2000);
    });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');

    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        ol.children[0].className = 'current';
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);

        })
    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    arrowr.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            };
            circleChange();
        }
    });
    arrowl.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;

            circleChange();
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function() {
        //手动调用点击事件
        arrowr.click();
    }, 2000);

})