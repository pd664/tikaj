// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!',
//       message2: 'Bye Vue!'
//     }
// })
  
class vue {
    constructor(el, message, message2) {
        this.el = el,
        this.message = message,
        this.message2 = message2
    }

    change() {
        const div = document.querySelector('div')
        document.body.innerHTML = div.innerHTML.replace("{{message}}", this.message);
        document.body.innerHTML = div.innerHTML.replace("message2", this.message2);
    }
}

let a = new vue("", "hello", "world");

a.change()