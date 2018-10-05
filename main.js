window.onload=function(){var keys = {
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
  'f': 'faker.com',
}

//读取进度
var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
if (hashInLocalStorage) {
  hash = hashInLocalStorage;
}

var index = 0;
while (index < keys['length']) {
  var div1 = document.createElement('div');
  container.appendChild(div1);
  var index2 = 0;
  var x = keys[index];
  while (index2 < x['length']) {
    var kbd = document.createElement('kbd');
    kbd.textContent = x[index2];
    buttonX = document.createElement('button');
    buttonX.textContent = "编辑";
    buttonX.id = x[index2];
    buttonX.onclick = function (e) {
      key = e['target']['id'];
      address = prompt('给我一个网址');
      hash[key] = address; //变更
      localStorage.setItem('zzz', JSON.stringify(hash));
    };
    kbd.appendChild(buttonX);
    div1.appendChild(kbd);
    index2++;
  }
  index++;
}

document.onkeypress = function (e) {
  key = e['key'];
  website = hash[key];
  console.log(website);
  //location.href = "http://"+website;//模拟地址栏输入
  window.open("http://" + website, '_blank'); //新窗口打开
}
}