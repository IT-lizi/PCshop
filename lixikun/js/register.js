window.addEventListener('load', function() {


    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var tel = document.querySelector('#tel');
    var repwd = /\w{8,12}/;
    var pwd = document.querySelector('#password');
    var surepwd = this.document.querySelector('#surepwd')
    tel.onblur = function() {
        this.nextElementSibling.style.display = 'inline-block'
        if (regtel.test(this.value)) {

            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 恭喜你输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error-icon"></i> 格式错误请重新输入'


        }
    }
    pwd.onfocus = function() {
        this.style.color = "black";
        this.type = 'password'
        if (this.value == '8-12位数字、字母下划线组合') {
            this.value = ''
        }
    }
    pwd.onblur = function() {
        this.nextElementSibling.style.display = 'inline-block'
        if (this.value == '') {
            this.type = 'text'
            this.value = '8-12位数字、字母下划线组合'
        } else {
            if (repwd.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 格式正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error-icon"></i> 格式错误'
            }
        }
    }
    surepwd.onblur = function() {
        this.nextElementSibling.style.display = 'inline-block'
        if (this.value == pwd.value) {

            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success-icon"></i> 输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error-icon"></i> 您两次输入的密码不一致'


        }
    }
})