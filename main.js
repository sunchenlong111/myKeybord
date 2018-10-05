window.onload = function () {
  var keys = {
    '0': {
      0: 'q',
      1: 'w',
      2: 'e',
      3: 'r',
      4: 't',
      5: 'y',
      6: 'u',
      7: 'i',
      8: 'o',
      9: 'p',
      'length': 10
    },
    '1': {
      0: 'a',
      1: 's',
      2: 'd',
      3: 'f',
      4: 'g',
      5: 'h',
      6: 'j',
      7: 'k',
      8: 'l',
      'length': 9
    },
    '2': {
      0: 'z',
      1: 'x',
      2: 'c',
      3: 'v',
      4: 'b',
      5: 'n',
      6: 'm',
      'length': 7
    },
    'length': 3
  }
  var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.com',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'yy.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'o': 'oppo.com',
    'a': 'apple.com',
    's': 'sogou.com',
    'd': 'didi.com',
    'f': 'facebook.com',
    'g': 'google.com',
    'h': 'haitou.com',
    'j': 'jackjones.com',
    'k': 'kuaishou.com',
    'l': 'luhu.com',
    'z': 'zhihu.com',
    'x': 'xiedaimal.com',
    'c': 'changba.com',
    'v': undefined,
    'b': 'bilibili.com',
    'n': 'njfu.edu.cn',
    'm': 'meituan.com'
  }

  var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
  if(hashInLocalStorage){
    hash = hashInLocalStorage;
  }
  var index = 0;
  while ( index < keys['length']) {
    var div1 = document.createElement('div');
    container.appendChild(div1);
    var index2 = 0;
    var x = keys[index];
    while(index2 < x['length']){
      var kbd = document.createElement('kbd');
      kbd.textContent = x[index2];
      var buttonX = document.createElement('button');
      buttonX.id = x[index2];
      buttonX.textContent = "编辑";
      buttonX.onclick = function(e){
        var key = e.target['id'];
        var address = prompt("给我一个新的网址");
        hash[key] = address;//变更网址
        localStorage.setItem('zzz',JSON.stringify(hash));
      }
      kbd.appendChild(buttonX);
      div1.appendChild(kbd);
      index2++;
    }
    index++;
  }



  //键盘事件
  document.onkeypress = function(e){
   var keyValue = e.key;
   var website = hash[keyValue];
   console.log(website);
   window.open('http://' + website ,'_blank');
  }
}