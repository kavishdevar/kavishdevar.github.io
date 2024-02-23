function changeView(url) {
    url = "".concat(location.origin).concat(url.replace(' ', '-').toLowerCase());
    console.log(url);
    var sourceHasAside = document.querySelector('aside') != null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', new URL(url.toString()), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        var _a, _b;
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resp = xhr.responseText;
            var parser = new DOMParser();
            var doc = parser.parseFromString(resp, 'text/html');
            document.title = doc.title;
            document.querySelector('#title').innerHTML = doc.querySelector('#title').innerHTML;
            var targetContent = doc.querySelector('.content');
            var sourceContent = document.querySelector('.content');
            var targetAside = doc.querySelector('aside');
            console.log(sourceContent);
            if (sourceHasAside && targetAside != null) {
                (_a = document.querySelector('aside')) === null || _a === void 0 ? void 0 : _a.replaceWith(targetAside);
                document.querySelector('#content-style').innerHTML = doc.querySelector('#content-style').innerHTML;
                eval(targetAside.querySelector('script').innerText);
            }
            else if (!sourceHasAside && targetAside != null) {
                document.querySelector('main').appendChild(targetAside);
                document.querySelector('#content-style').innerHTML = doc.querySelector('#content-style').innerHTML;
                eval(targetAside.querySelector('script').innerText);
            }
            else if (sourceHasAside && targetAside == null) {
                document.querySelector('#content-style').innerHTML = doc.querySelector('#content-style').innerHTML;
                (_b = document.querySelector('aside')) === null || _b === void 0 ? void 0 : _b.remove();
            }
            if (sourceContent != null && targetContent != null) {
                sourceContent.replaceWith(targetContent);
            }
            history.pushState({ page: url.toString().split('/').slice(-1).toString().toUpperCase() }, url.toString().split('/').slice(-1).toString().toUpperCase(), url.toString());
        }
    };
}
window.onpopstate = function (event) {
    console.log(location.pathname);
    changeView(location.pathname);
};
