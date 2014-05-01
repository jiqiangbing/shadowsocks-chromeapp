chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('./src/window.html', {
        'width': 500,
        'height': 350
    });
});