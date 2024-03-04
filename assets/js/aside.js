slugify = function () {
    var str = this.toString().trim();
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')

    return str;
}
var content = `{{content}}`;
var temp = document.createElement('div');
temp.innerHTML = content;
var h2El = Array.from(temp.querySelectorAll('h2'));
var h3El = Array.from(temp.querySelectorAll('h3'));
var breaks = Array.from(temp.childNodes).filter(node => node.nodeType === 8 && node.textContent.includes('title_break'));

var headers = {};
h2El.forEach((h2, ii) => {
    headers[h2.innerText] = [];
    var nextBreak = breaks.find(b => Array.from(temp.childNodes).indexOf(b) > Array.from(temp.childNodes).indexOf(h2));
    var nextH2 = h2El[ii + 1];
    h3El.forEach(h3 => {
        if (Array.from(temp.childNodes).indexOf(h3) > Array.from(temp.childNodes).indexOf(h2) &&
            (!nextBreak || Array.from(temp.childNodes).indexOf(h3) < Array.from(temp.childNodes).indexOf(nextBreak)) &&
            (!nextH2 || Array.from(temp.childNodes).indexOf(h3) < Array.from(temp.childNodes).indexOf(nextH2))) {
            headers[h2.innerText].push(h3.innerText);
        }
    });
});

var html = '';

for (var h2 in headers) {
    html += `<a class="toc-link" href="#${slugify(h2)}">${h2}</a>`;
    if (headers[h2].length > 0) {
        html += '<br><ul>';
        for (var ii = 0; ii < headers[h2].length; ii++) {
            html += `<li><a class="toc-link" href="#${slugify(headers[h2][ii])}">${headers[h2][ii]}</a></li>`;
        }
        html += '</ul>';
    }
    else {
        html += '<br><br>';
    }
}

document.querySelector('#tableofcontents').innerHTML = html;

document.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        changeView(link.href.replace(window.location.origin, ''));
    });
});
async function share(text, url) {
    console.log('Sharing', text, url)
    try {
        await navigator.share({
            text: text,
            url: url
        })
    } catch (error) {
        console.log('Sharing failed!', error)
    }
}