// Custom element `md-navigation-rail`
class MdNavigationTabs extends HTMLElement {
    tabs: NodeListOf<Element>;
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <div class='md-navigation-tabs'>
                <slot></slot>
            </div>
        `;
        const cssText = `
            .md-navigation-tabs {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 30px;
            }
            `;
        const style = document.createElement('style');
        style.textContent = cssText;
        shadow.appendChild(style);
        // this element contains the tabs (md-navigation-tab) and the active tab can be set by toggling the `active` attribute
        setTimeout(() => {
            this.tabs = document.querySelectorAll('md-navigation-tab');
            console.log(this.tabs);
            this.tabs.forEach(tab => {
                var tabel = tab as HTMLElement;
                tabel.addEventListener('click', () => {
                    this.tabs.forEach(tab => tab.removeAttribute('active'));
                    tab.setAttribute('active', '');
                    if (tabel.shadowRoot != null && tabel.shadowRoot.querySelector('.md3-navigation-tab__icon-content') != null){
                        var tab_icon_content = tabel.shadowRoot!.querySelector('.md3-navigation-tab__icon-content')! as HTMLElement;
                        tab_icon_content.style!.borderRadius = '28px';
                        tabel.onmouseover = function () { tab_icon_content.style.backgroundColor = 'var(--md-sys-color-surface-variant)' }
                        tabel.onmouseleave = function () { tab_icon_content.style.backgroundColor = '' }
                    }
                    changeView(tab.getAttribute('view')!);
                });
            });
        });
    }
    setActiveTabByView(view) {
        console.log(view)
        this.tabs.forEach(tab => {
            if (tab.getAttribute('view') === view) {
                tab.setAttribute('active', '');
            } else {
                tab.removeAttribute('active');
            }
        });
    }

}
window.customElements.define('md-navigation-tabs', MdNavigationTabs);

class MdNavigationRail extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this!.shadowRoot!.innerHTML = `
            <div class='md-navigation-rail'>
                <slot name='fab' class="md-navigation-rail__fab-icon"></slot>
                <slot name='tabs' class="md-navigation-rail__tabs"></slot>
                <slot name='theme' class="md-navigation-rail__theme-icon"></slot>
            </div>
        `;
        const cssText = `
            .md-navigation-rail {
                height: 100vh;
                background-color: var(--md-sys-color-surface-highest);
                color: var(--md-sys-color-on-surface);
                font-size: 20px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                width: 100%;
            }
            .md-navigation-rail__fab-icon {
                margin-left: 0;
                padding-top: 10px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 20px;
            }

            .md-navigation-rail__theme-icon {
                position: absolute;
                bottom: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-bottom: 10px;
            }
            .md-navigation-rail__tabs {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            `;

        const style = document.createElement('style');
        style.textContent = cssText;
        this!.shadowRoot!.appendChild(style);
    }
}
window.customElements.define('md-navigation-rail', MdNavigationRail);
function changeView(url: String) {
    url = `${location.origin}${url.replace(' ', '-').toLowerCase()}`;
    var sourceHasAside = document.querySelector('aside') != null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', new URL(url.toString()), true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resp = xhr.responseText;
            var parser = new DOMParser();
            var doc = parser.parseFromString(resp, 'text/html');

            document.title = doc.title;
            document.querySelector('#title')!.innerHTML = doc.querySelector('#title')!.innerHTML;

            var targetContent = doc.querySelector('.content');
            var sourceContent = document.querySelector('.content');
            var targetAside = doc.querySelector('aside');

            if (sourceHasAside && targetAside != null) {
                document.querySelector('aside')?.replaceWith(targetAside);
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                eval(targetAside.querySelector('script')!.innerText)
            }
            else if (!sourceHasAside && targetAside != null) {
                document.querySelector('main')!.appendChild(targetAside);
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                eval(targetAside.querySelector('script')!.innerText)
            }
            else if (sourceHasAside && targetAside == null) {
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                document.querySelector('aside')?.remove();
            }
            if (sourceContent != null && targetContent != null) {
                sourceContent.replaceWith(targetContent);
            }
            var tabs = document.querySelector('md-navigation-tabs') as MdNavigationTabs;
            history.pushState({ page: url.toString().split('/').slice(-1).toString().toUpperCase() }, url.toString().split('/').slice(-1).toString().toUpperCase(), url.toString());
            tabs.setActiveTabByView(`/${location.pathname.split('/')[1]}`);
        }
    }
}
window.onpopstate = function () {
    changeView(location.pathname);
};

window.onload = function () { changeView(location.pathname) };