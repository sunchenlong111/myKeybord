window.onload = function () {

  //1初始化数据
  var hashInit = init();
  var keys = hashInit.keys;
  var hash = hashInit.hash;
 
  //2.生成键盘
  generateKeybord(keys,hash);
  
  //3.监听键盘
  listenUsers(hash);
}

  //用户自定义私有函数

  function init(){
    //初始化键盘
    var keys = {
    '0': {0: 'q',1: 'w',2: 'e',3: 'r',4: 't',5: 'y',6: 'u',7: 'i',8: 'o',9: 'p','length': 10},
    '1': {0: 'a',1: 's',2: 'd',3: 'f',4: 'g',5: 'h',6: 'j',7: 'k',8: 'l','length': 9},
    '2': {0: 'z',1: 'x',2: 'c',3: 'v',4: 'b',5: 'n',6: 'm','length': 7},
    'length': 3
    }
    //初始化键盘对应的网站
    var hash = {'q': 'qq.com','w': 'weibo.com','e': 'ele.com','r': 'renren.com','t': 'tencent.com',
      'y': 'yy.com','u': 'uc.com','i': 'iqiyi.com','o': 'oppo.com','a': 'apple.com','s': 'sogou.com',
      'd': 'didi.com','f': 'facebook.com','g': 'google.com','h': 'haitou.com','j': 'jackjones.com',
      'k': 'kuaishou.com','l': 'luhu.com','z': 'zhihu.com','x': 'xiedaimal.com','c': 'changba.com',
      'v': undefined,'b': 'bilibili.com','n': 'njfu.edu.cn','m': 'meituan.com'}
    //取出localstorage里面的zzz对应的hash
    var hashInLocalStorage = getFromLocalStorage('zzz');
    if(hashInLocalStorage){
      hash = hashInLocalStorage;
    }
    //返回初始化的数据
    return {
      "keys":keys,
      "hash":hash
    }
  }

  //生成键盘
  function generateKeybord(keys, hash) {
    for (var index = 0; index < keys['length']; index++) {
      var div1 = tag('div');
      container.appendChild(div1);
      var x = keys[index]; //三个数组对应三个div，div里面放入一个个kbd
      for (var index2 = 0; index2 < x['length']; index2++) {
        var span = createSpan(x[index2]);
        var button = createButton(x[index2],hash);
        var img = createImg(hash[x[index2]]);
        var kbd = createkbd(span, img, button, hash);
        //kbd里面有字母span，图标img，编辑键button
        div1.appendChild(kbd);
      }
    }
  }

   //键盘事件 监听用户的按键
  function listenUsers(hash) {
    document.onkeypress = function (e) {
      var keyValue = e.key;
      if(!(keyValue in hash)) return 
      var website = hash[keyValue];
      console.log(website);
      window.open('http://' + website, '_blank');
    }
  }

  //获取浏览器存储的hash
  function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null');
  }

  //创建元素并且赋予属性
  function tag(tagName, attributes) {
    let element = document.createElement(tagName);
    for (let key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  }

  //创建span
  function createSpan(textContent) {
    var span = tag('span', {
      className: 'text'
    });
    span.textContent = textContent;
    return span;
  }

  //创建button
  function createButton(id,hash) {
    var button = tag('button', {
      textContent: "编辑"
    });
    button.id = id;

    //定义button点击事件，修改链接，并将图片换掉
    button.onclick = function (e) {
      var button2 = e['target'];
      var key = button2['id'];
      var img2 = button2.previousSibling;
      var address = prompt("给我一个新的网址");
      hash[key] = address; //变更网址
      img2.src = 'http://' + address + '/favicon.ico';
      img2.onerror = function (e) {
        e.target.src = "./images/point.png";
      }
      localStorage.setItem('zzz', JSON.stringify(hash));
      e.stopPropagation();
    }
    return button;
  }

  //创建img标签
  function createImg(domain) {
    var img = tag('img');
    if (domain) {
      img.src = 'http://' + domain + '/favicon.ico';
    } else {
      img.src = "./images/point.png";
    }
    img.onerror = function (e) {
      e.target.src = "./images/point.png";
    }
    return img;
  }

  //创建kbd标签，并将img，span，button放进去
  function createkbd(span, img, button, hash) {
    var kbd = tag('kbd', {
      className: 'key'
    });
    kbd.appendChild(span)
    kbd.appendChild(img)
    kbd.appendChild(button);
    kbd.addEventListener("click", (e) => {
      var key = e.target;
      if (key.tagName != 'kbd') {
        key = key.parentNode;
      }
      var keyValue = key.lastChild.id;
      var website = hash[keyValue];
      window.open('http://' + website, '_blank');
    })

    return kbd;
  }


