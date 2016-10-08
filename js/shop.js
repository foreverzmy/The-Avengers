(function () {
    var time = document.getElementById("time");
    var add1 = document.getElementById("add1");
    var num1 = document.getElementById("num1");
    var less1 = document.getElementById("less1");
    var add2 = document.getElementById("add2");
    var num2 = document.getElementById("num2");
    var less2 = document.getElementById("less2");
    var add3 = document.getElementById("add3");
    var num3 = document.getElementById("num3");
    var less3 = document.getElementById("less3");
    var result = document.getElementById('result');
    var submit = document.getElementById('submit');
    var show = document.getElementById('show');
    var img = document.getElementsByTagName('img')[0];
    var target = document.querySelectorAll('#target div')[0];
    var worker = new Worker('js/worker.js');

    onload = function () {
        setInterval(function () {
            time.value = new Date().toLocaleString();
        }, 1000);
    }
    img.ondragstart = function (e) {
        e.dataTransfer.setData('id', this.id);
        // localStorage.id = this.id;
    };

    target.ondragover = function (e) {
        e.preventDefault();
    };
    target.ondrop = function (e) {
        e.preventDefault();
        this.appendChild(document.getElementById(e.dataTransfer.getData('id')));

    };
    target.onclick = function () {
        history.go(0);
    };
    var container = document.getElementsByClassName('container')[0];
    var request = indexedDB.open('shop888', 1);
    var db;
    var clearElements = function () {
        history.go(1);
        var p = document.getElementsByTagName('p');
        console.log(p);
        if (p.length > 0) {
            for (var i = p.length; i >= 0; i--) {
                container.removeChild(p[i]);
            }
        }

    };

    request.onupgradeneeded = function () {
        db = this.result;
        var store = db.createObjectStore('shoplist', {
            keyPath: 'id'
        });
        store.createIndex('id', 'id', {
            unique: true
        });
        store.createIndex('num1', 'num1', {
            unqiue: false
        });
        store.createIndex('num2', 'num2', {
            unqiue: false
        });
        store.createIndex('num3', 'num3', {
            unqiue: false
        });
        store.createIndex('result', 'result', {
            unqiue: false
        });
    };

    request.onsuccess = function () {
        db = this.result;
        submit.onclick = function () {

            var transaction = db.transaction(['shoplist'], 'readwrite');
            var store = transaction.objectStore('shoplist');
            store.add({
                id: time.value,
                num1: parseInt(num1.value),
                num2: parseInt(num2.value),
                num3: parseInt(num3.value),
                result: parseInt(result.value)
            });
        };
        show.onclick = function () {
            $(".container").slideToggle();
            clearElements();
            var transaction = db.transaction(['shoplist'], 'readwrite');
            var store = transaction.objectStore('shoplist');
            var index = store.index('id');
            var rq = index.openCursor();
            rq.onsuccess = function () {
                var cursor = this.result;
                if (cursor) {
                    var p = document.createElement('p');
                    container.appendChild(p);
                    p.innerHTML = '您在' + cursor.value.id + ' 购买了棒球帽' + cursor.value.num1 + '个； 钥匙扣' + cursor.value.num2 + '个； 钢铁侠手办' + cursor.value.num3 + '个， 总计' + cursor.value.result + '元。';

                    cursor.continue();
                }
            }
        };

    };

    add1.onclick = function () {
        var num = parseInt(num1.value);
        num = num + 1;
        num1.value = num;
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    less1.onclick = function () {
        var num = parseInt(num1.value);
        if (num === 0) {
            num1.value = num;
        } else {
            num = num - 1;
            num1.value = num;
        };
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    add2.onclick = function () {
        var num = parseInt(num2.value);
        num = num + 1;
        num2.value = num;
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    less2.onclick = function () {
        var num = parseInt(num2.value);
        if (num === 0) {
            num2.value = num;
        } else {
            num = num - 1;
            num2.value = num;
        }
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    add3.onclick = function () {
        var num = parseInt(num3.value);
        num = num + 1;
        num3.value = num;
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    less3.onclick = function () {
        var num = parseInt(num3.value);
        if (num === 0) {
            num3.value = num;
        } else {
            num = num - 1;
            num3.value = num;
        }
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };

    num1.onchange = function () {
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };
    num2.onchange = function () {
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };
    num3.onchange = function () {
        var x = {
            one: parseInt(num1.value),
            two: parseInt(num2.value),
            three: parseInt(num3.value)
        };
        worker.postMessage(x);
        worker.onmessage = function (e) {
            result.value = e.data;
        };
    };


})();
