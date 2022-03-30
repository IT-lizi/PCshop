function animate(obj, target, callback) {
    //1.先清除之前的定时器，保证这个对象只运行了一个定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //制作缓动效果
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);

            callback && callback();



        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30)
}