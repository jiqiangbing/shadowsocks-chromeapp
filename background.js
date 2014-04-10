chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'width': 500,
        'height': 350
    });
});

require('./node_modules/shadowsocks/lib/shadowsocks/local').main();