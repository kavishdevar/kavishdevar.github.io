class MdNavigationRail extends HTMLElement {
    tabs: NodeListOf<Element>;
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this!.shadowRoot!.innerHTML = `
            <div class='md-navigation-rail'>
                <slot name='fab' class="md-navigation-rail__fab-icon"></slot>
                <slot class="md-navigation-rail__tabs"></slot>
                <slot name='bottom' class="md-navigation-rail__bottom"></slot>
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
                overflow-y: auto;
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

            .md-navigation-rail__bottom {
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
                padding-top: 20px;
            }
            @media (max-height: 645px) {
                .md-navigation-rail__bottom {
                    position: relative;
                }
            }
            `;
        const style = document.createElement('style');
        style.textContent = cssText;
        this!.shadowRoot!.appendChild(style);
        customElements.whenDefined('md-navigation-tab').then(() => {
            this.tabs = document.querySelectorAll('md-navigation-tab');
            this.tabs.forEach(tab => {
                var tabEl = tab as HTMLElement;
                var shadow = tabEl.shadowRoot as ShadowRoot;
                setTimeout(() => {
                    if (tabEl.shadowRoot != null && tabEl.shadowRoot.querySelector('.md3-navigation-tab__icon-content') != null) {
                        var tab_icon_content = tabEl.shadowRoot!.querySelector('.md3-navigation-tab__icon-content')! as any
                        tab_icon_content.style!.borderRadius = '28px';
                        tabEl.onmouseenter = function () {
                            tab_icon_content.style.backgroundColor = 'var(--md-sys-color-surface-variant)'
                            var xa = tabEl as any
                            var x = xa.getAttribute('view') as String
                            x = (x === '/') ? x : x.endsWith('/') ? x.slice(0, -1) : x
                            switch (x) {
                                case '/':
                                    if (window.innerWidth < 1600) {
                                        closeNavDrawer()
                                    }
                                    break;
                                case '/about':
                                    if (window.innerWidth < 1600) {
                                        closeNavDrawer()
                                    }
                                    break;
                                case '/posts':
                                    if (window.innerWidth < 1600) {
                                        closeNavDrawer()
                                    }
                                    break;
                                case '/projects':
                                    var el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                    el.style.display = 'block'
                                    el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    openNavDrawer()
                                    break;
                                case '/tools':
                                    var el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                    el.style.display = 'block'
                                    el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    openNavDrawer()
                                    break;
                                case '/holiday-homeworks':
                                    var el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                    el.style.display = 'block'
                                    el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                    el.style.display = 'none'
                                    openNavDrawer()
                                    break;
                                default:
                                    break;
                            }
                        }
                        tabEl.onmouseleave = function () {
                            tab_icon_content.style.backgroundColor = ''
                        }
                    }

                    tabEl.addEventListener('click', () => {
                        this.tabs.forEach(tab => tab.removeAttribute('active'));
                        tab.setAttribute('active', '');
                        changeView(tab.getAttribute('view')!);
                        if (window.innerWidth > 1100) {
                            var main = document.querySelector('main')!
                            main.style.marginLeft = '80px'
                            if (window.innerWidth > 1600) {
                                var main = document.querySelector('main')!
                                switch (tab.getAttribute('view')) {
                                    case '/':
                                        main.style.marginLeft = '80px'
                                        closeNavDrawer()
                                        break;
                                    case '/about':
                                        main.style.marginLeft = '80px'
                                        closeNavDrawer()
                                        break;
                                    case '/posts':
                                        main.style.marginLeft = '80px'
                                        closeNavDrawer()
                                        break;
                                    case '/projects':
                                        main.style.marginLeft = '330px'
                                        var el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                        el.style.display = 'block'
                                        el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        break;
                                    case '/tools':
                                        main.style.marginLeft = '330px'
                                        var el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                        el.style.display = 'block'
                                        el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        break;
                                    case '/holiday-homeworks':
                                        main.style.marginLeft = '330px'
                                        var el = document.querySelector('#homework-list-sublist')! as HTMLElement
                                        el.style.display = 'block'
                                        el = document.querySelector('#tools-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        el = document.querySelector('#projects-list-sublist')! as HTMLElement
                                        el.style.display = 'none'
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                        else {
                            var categories = document.querySelector('.category-list') as HTMLElement
                            categories.style.display = 'block'
                            var el = document.querySelector('#projects-list-sublist')! as HTMLElement
                            el.style.display = 'none'
                            el = document.querySelector('#tools-list-sublist')! as HTMLElement
                            el.style.display = 'none'
                            el = document.querySelector('#homework-list-sublist')! as HTMLElement
                            el.style.display = 'none'
                            var main = document.querySelector('main')!
                            main.style.marginLeft = '0'
                            closeNavDrawer()
                        }
                    });
                });
            });
        });
    }
    setActiveTabByView(view: String) {
        this.tabs.forEach(tab => {
            if (tab.getAttribute('view') === view) {
                tab.setAttribute('active', '');
            } else {
                tab.removeAttribute('active');
            }
        });
    }
}


window.customElements.define('md-navigation-rail', MdNavigationRail);

var xhr = new XMLHttpRequest();
xhr.open('GET', '/assets/js/aside.js', true);
xhr.send();
var asideScript = ''
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        asideScript = xhr.responseText;
    }
}

function changeView(url: String, dontPush: boolean = false) {
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
            if (doc.getElementsByTagName("meta")[0].content != 'content') {
                window.location.href=String(url);
            }
            document.title = doc.title;
            document.querySelector('#title')!.innerHTML = doc.querySelector('#title')!.innerHTML;

            var targetContent = doc.querySelector('.content');
            var sourceContent = document.querySelector('.content');
            var targetAside = doc.querySelector('aside');

            if (sourceHasAside && targetAside != null) {
                document.querySelector('aside')?.replaceWith(targetAside);
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                eval(asideScript.replace('{{content}}', targetContent!.innerHTML))
            }
            else if (!sourceHasAside && targetAside != null) {
                document.querySelector('main')!.appendChild(targetAside);
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                eval(asideScript.replace('{{content}}', targetContent!.innerHTML))
            }
            else if (sourceHasAside && targetAside == null) {
                document.querySelector('#content-style')!.innerHTML = doc.querySelector('#content-style')!.innerHTML;
                document.querySelector('aside')?.remove();
            }
            if (sourceContent != null && targetContent != null) {
                if (url.includes('#')) {
                    var id = url.split('#')[1];
                    var element = document.getElementById(id);
                    setTimeout(() => {
                        element!.scrollIntoView();
                    });
                }
                sourceContent.replaceWith(targetContent);
                if (targetContent!.querySelector('script') != null) {
                    targetContent.querySelectorAll('script').forEach(script => {
                        eval(script.innerText);
                    });
                }
            }
            var rail = document.querySelector('md-navigation-rail') as MdNavigationRail;
            if (!dontPush) { history.pushState({ page: url.toString().split('/').slice(-1).toString().toUpperCase() }, url.toString().split('/').slice(-1).toString().toUpperCase(), url.toString()); }
            rail.setActiveTabByView(`/${location.pathname.split('/')[1]}`);
            document.querySelectorAll('a:not(.toc-link):not(.regular-link)').forEach(a => (a as HTMLElement).onclick = function (e) {
                e.preventDefault();
                const href = a.getAttribute('href')!;
                const url = new URL(href, location.origin);
                if (url.origin !== location.origin) {
                    window.open(href, '_blank');
                } else {
                    e.ctrlKey ? window.open(href) : changeView(href);
                }
            });
            document.querySelectorAll('md-list-item.nav').forEach(b => {
                var newpath = b.shadowRoot?.querySelector('a')?.getAttribute('href')
                var currentPath = location.pathname
                if (currentPath.endsWith('/')) {
                    currentPath = currentPath.slice(0, -1)
                }
                if (newpath!.endsWith('/')) {
                    newpath = newpath!.slice(0, -1)
                }
                if (newpath === currentPath) {
                    b.classList.add('active-item')
                }
                else {
                    b.classList.remove('active-item')
                }
            });
            var categories = document.querySelector('.category-list') as HTMLElement
            for (let i = 0; i < categories.children.length; i++) {
                var category = categories.children[i] as HTMLLinkElement

                if (category.href.toLowerCase().replace('/', '') == location.pathname.split('/')[1]) {
                    category.classList.add('active-item')
                }
                else if (category.innerText.toLowerCase() == 'home' && location.pathname == '/') {
                    category.classList.add('active-item')
                }
                else {
                    category.classList.remove('active-item')
                }
            }
            var main = document.querySelector('main')!

            var codeDivEls = document.querySelectorAll('div[class*=\'language-\']:not([class=\'language-plaintext\'])') as NodeListOf<HTMLElement>

            for (let i = 0; i < codeDivEls.length; i++) {
                if (codeDivEls[i].classList.contains('no-copy')) {
                    return;
                }
                var codePreEl = codeDivEls[i].querySelector('pre')!
                codePreEl.style.position = 'relative'
                var codeEl = codeDivEls[i].querySelector('code')!
                var button = document.createElement('md-filled-icon-button')
                codeEl.style.width = '95%'
                button.style.position = 'absolute'
                button.style.right = '0'
                button.style.top = '0'
                let currentCode = codeEl.innerText;
                button.onclick = function () {
                    navigator.clipboard.writeText(currentCode)
                }
                var icon = document.createElement('md-icon')
                icon.innerText = 'content_copy'
                button.appendChild(icon)
                codePreEl.appendChild(button)
            }
        }
    }
}
window.onpopstate = function () {
    changeView(location.pathname, true);
};

window.onload = function () {
    var main = document.querySelector('main')!

    if (window.innerWidth < 1100) {
        var sublists = document.querySelectorAll('.sublist') as NodeListOf<Element>
        for (let i = 0; i < sublists.length; i++) {
            var sublist = sublists[i] as HTMLElement
            sublist.style.display = 'none'
        }
    }
    document.querySelectorAll('a:not(.toc-link):not(.regular-link)').forEach(a => (a as HTMLElement).onclick = function (e) {
        e.preventDefault();
        const href = a.getAttribute('href')!;
        const url = new URL(href, location.origin);
        if (url.origin !== location.origin) {
            window.open(href, '_blank');
        } else {
            e.ctrlKey ? window.open(href) : changeView(href);
        }
    });

    document.querySelectorAll('md-list-item.nav').forEach(a => {
        var aEl = a.shadowRoot?.querySelector('a') as HTMLElement
        (aEl).onclick = function (e) {
            e.preventDefault();
            e.ctrlKey ? window.open(aEl.getAttribute('href')!) : changeView(aEl.getAttribute('href')!);
            a.classList.add('active-item')
            document.querySelectorAll('md-list-item.nav').forEach(b => {
                if (b != a) {
                    b.classList.remove('active-item')
                }
            });
        };
    });

    document.querySelector('.category-list')!.querySelectorAll('md-list-item.nav').forEach(a => (a.shadowRoot?.querySelector('a') as HTMLElement).onclick = function (e) {
        e.preventDefault();
        var ahref = a.shadowRoot?.querySelector('a')?.getAttribute('href')!
        e.ctrlKey ? window.open(ahref) : changeView(ahref);

        a.classList.add('active-item')
        document.querySelectorAll('md-list-item.nav').forEach(b => {
            if (b != a) {
                b.classList.remove('active-item')
            }
        });
        if (window.innerWidth < 1100) {
            closeNavDrawer()
        }
    });

    changeView(location.href.replace(location.origin, ''))

    if (window.innerWidth > 1600) {
        main.style.marginLeft = '330px'
        var path = (location.pathname === '/') ? location.pathname : `/${location.pathname.split('/')[1]}`
        switch (path) {
            case '/':
                main.style.marginLeft = '80px'
                closeNavDrawer()
                break;
            case '/about':
                main.style.marginLeft = '80px'
                closeNavDrawer()
                break;
            case '/posts':
                main.style.marginLeft = '80px'
                closeNavDrawer()
                break;
            case '/projects':
                var el = document.querySelector('#projects-list-sublist')! as HTMLElement
                el.style.display = 'block'
                el = document.querySelector('#tools-list-sublist')! as HTMLElement
                el.style.display = 'none'
                el = document.querySelector('#homework-list-sublist')! as HTMLElement
                el.style.display = 'none'
                openNavDrawer()
                break;
            case '/tools':
                var el = document.querySelector('#tools-list-sublist')! as HTMLElement
                el.style.display = 'block'
                el = document.querySelector('#projects-list-sublist')! as HTMLElement
                el.style.display = 'none'
                el = document.querySelector('#homework-list-sublist')! as HTMLElement
                el.style.display = 'none'
                openNavDrawer()
                break;
            case '/holiday-homeworks':
                var el = document.querySelector('#homework-list-sublist')! as HTMLElement
                el.style.display = 'block'
                el = document.querySelector('#tools-list-sublist')! as HTMLElement
                el.style.display = 'none'
                el = document.querySelector('#projects-list-sublist')! as HTMLElement
                el.style.display = 'none'
                openNavDrawer()
                break;
            default:
                break;
        }
    }
    window.onresize = function () {
        if (window.innerWidth > 1100) {
            var el = document.querySelector('.nav-drawer-content')! as HTMLElement
            var lists = el.querySelectorAll('md-list')
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i] as HTMLElement
                list.style.display = 'block'
                var sublists = list.querySelectorAll('md-list')
                for (let j = 0; j < sublists.length; j++) {
                    var sublist = sublists[j] as HTMLElement
                    sublist.style.display = 'none'
                }
            }
            var categories = document.querySelector('.category-list') as HTMLElement
            categories.style.display = 'none'
            closeNavDrawer()
            main.style.marginLeft = '80px'
        }
        else if (window.innerWidth > 1600) {
            var el = document.querySelector('.nav-drawer-content')! as HTMLElement
            var lists = el.querySelectorAll('md-list')
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i] as HTMLElement
                list.style.display = 'block'
                var sublists = list.querySelectorAll('md-list')
                for (let j = 0; j < sublists.length; j++) {
                    var sublist = sublists[j] as HTMLElement
                    sublist.style.display = 'block'
                }
            }
            main.style.marginLeft = '330px'
            var categories = document.querySelector('.category-list') as HTMLElement
            categories.style.display = 'none'
            openNavDrawer()
        }
        else {
            var el = document.querySelector('.nav-drawer-content')! as HTMLElement
            var lists = el.querySelectorAll('div') as NodeListOf<Element>
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i] as HTMLElement
                if ((list.querySelector('md-list-item.nav') as HTMLElement)?.innerText != 'Projects overview' && (list.querySelector('md-list-item.nav') as HTMLElement)?.innerText != 'Tools overview' && (list.querySelector('md-list-item.nav') as HTMLElement)?.innerText != 'Holiday Homeworks overview') {
                    list.style.display = 'block'
                }
                else {
                    list.style.display = 'none'
                }
            }
            var categories = document.querySelector('.category-list') as HTMLElement
            categories.style.display = 'block'
            closeNavDrawer()
            main.style.marginLeft = '0'
        }
    }
    var dm = document.getElementById("dark-mode-set") as any
    if (localStorage.getItem('darkmode') === 'true') {
        dm.buttons[2].selected = true
        dm.buttons[0].selected = false
        dm.buttons[1].selected = false
    }
    else if (localStorage.getItem('darkmode') === 'auto') {
        dm.buttons[1].selected = true
        dm.buttons[0].selected = false
        dm.buttons[2].selected = false
    }
    else {
        dm.buttons[0].selected = true
        dm.buttons[1].selected = false
        dm.buttons[2].selected = false
    }

    dm.addEventListener('click', function () {
        if (dm.buttons[0].selected) {
            localStorage.setItem('darkmode', 'false')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
        else if (dm.buttons[1].selected) {
            localStorage.setItem('darkmode', 'auto')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
        else if (dm.buttons[2].selected) {
            localStorage.setItem('darkmode', 'true')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
    });
    var dmMobile = document.getElementById("dark-mode-set-mobile") as any
    if (localStorage.getItem('darkmode') === 'true') {
        dmMobile.buttons[2].selected = true
        dmMobile.buttons[0].selected = false
        dmMobile.buttons[1].selected = false
    }
    else if (localStorage.getItem('darkmode') === 'auto') {
        dmMobile.buttons[1].selected = true
        dmMobile.buttons[0].selected = false
        dmMobile.buttons[2].selected = false
    }
    else {
        dmMobile.buttons[0].selected = true
        dmMobile.buttons[1].selected = false
        dmMobile.buttons[2].selected = false
    }

    dmMobile.addEventListener('click', function () {
        if (dmMobile.buttons[0].selected) {
            localStorage.setItem('darkmode', 'false')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
        else if (dmMobile.buttons[1].selected) {
            localStorage.setItem('darkmode', 'auto')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
        else if (dmMobile.buttons[2].selected) {
            localStorage.setItem('darkmode', 'true')
            document.querySelectorAll('theme-changer').forEach((el) => {
                (el as any).setTheme()
            });
        }
    });
    (document.querySelector('theme-changer')! as any).setTheme()
};

function init(categories, projects, tools, homeworks) {
    var projectsEl = document.createElement('div')
    projectsEl.setAttribute('id', 'projects-list-sublist')
    projectsEl.classList.add('sublist')
    var toolsEl = document.createElement('div')
    toolsEl.setAttribute('id', 'tools-list-sublist')
    toolsEl.classList.add('sublist')

    var homeworkEl = document.createElement('div')
    homeworkEl.setAttribute('id', 'homework-list-sublist')
    homeworkEl.classList.add('sublist')

    var projectsList = document.createElement('md-list')

    var toolsList = document.createElement('md-list')
    var homeworkList = document.createElement('md-list')

    var projectsText = document.createElement('md-list-item') as any
    projectsText.innerText = 'Projects overview'
    projectsText.type = 'link'
    projectsText.href = '/projects'
    projectsText.classList.add('nav')
    var toolsText = document.createElement('md-list-item') as any
    toolsText.type = 'link'
    toolsText.href = '/tools'
    toolsText.innerText = 'Tools overview'
    toolsText.classList.add('nav')
    var homeworkText = document.createElement('md-list-item') as any
    homeworkText.type = 'link'
    homeworkText.href = '/holiday-homeworks'
    homeworkText.innerText = 'Holiday Homeworks overview'
    homeworkText.classList.add('nav')

    projectsEl.appendChild(projectsText)
    toolsEl.appendChild(toolsText)
    homeworkEl.appendChild(homeworkText)

    projectsEl.appendChild(projectsList)
    toolsEl.appendChild(toolsList)
    homeworkEl.appendChild(homeworkList)

    projects.keys().forEach(project => {
        var listItem = document.createElement('md-list-item') as any
        listItem.type = 'link'
        listItem.href = projects.get(project)
        listItem.innerText = project
        listItem.classList.add('nav')
        projectsList.appendChild(listItem)
    })
    tools.keys().forEach(tool => {
        var listItem = document.createElement('md-list-item') as any
        listItem.type = 'link'
        listItem.href = tools.get(tool)
        listItem.innerText = tool
        listItem.classList.add('nav')
        toolsList.appendChild(listItem)
    })
    homeworks.keys().forEach(homework => {
        var listItem = document.createElement('md-list-item') as any
        listItem.type = 'link'
        listItem.href = homeworks.get(homework)
        listItem.innerText = homework
        listItem.classList.add('nav')
        homeworkList.appendChild(listItem)
    })
    var categoryEl = document.createElement('md-list')
    categoryEl.classList.add('category-list')
    for (let category of categories) {
        var categoryText = document.createElement('md-list-item') as any
        categoryText.innerText = category
        categoryText.type = 'link'
        categoryText.classList.add('nav')
        if (category == 'Home') { categoryText.href = '/' }
        else { categoryText.href = `/${slugify(category)}` }
        categoryEl.appendChild(categoryText)
        document.querySelector('.nav-drawer-content')!.appendChild(categoryEl)
    }
    document.querySelector('.nav-drawer-content')!.appendChild(projectsEl)
    document.querySelector('.nav-drawer-content')!.appendChild(toolsEl)
    document.querySelector('.nav-drawer-content')!.appendChild(homeworkEl)
}

function slugify(string: String) {
    return string.toLowerCase().trim()
        .replace(' ', '-')
}

function toggleNavDrawer() {
    var navDrawer = document.querySelector!('#nav-drawer') as any
    navDrawer.opened = !navDrawer.opened;
    document.querySelector('main')!.classList.toggle('scrim-background');
    document.querySelector('main')!.onclick = function () { closeNavDrawer() }
}

function openNavDrawer() {
    var navDrawer = document.querySelector('#nav-drawer') as any
    navDrawer.opened = true;
    if (window.innerWidth < 1600) {
        navDrawer.onmouseleave = function () { closeNavDrawer() }
        document.querySelector('main')!.classList.add('scrim-background');
        document.querySelector('main')!.onclick = function () { closeNavDrawer() }
    }
    else {
        var path = (location.pathname === '/') ? location.pathname : `/${location.pathname.split('/')[1]}`
        switch (path) {
            case '/':
                document.querySelector('main')!.classList.add('scrim-background');
                break;
            case '/about':
                document.querySelector('main')!.classList.add('scrim-background');
                break;
            default:
                break;
        }
        navDrawer.onmouseleave = function () {
            switch (path) {
                case '/':
                    closeNavDrawer()
                    break;
                case '/about':
                    closeNavDrawer()
                    break;
                case '/posts':
                    closeNavDrawer()
                    break;
                case '/projects':
                    var el = document.querySelector('#projects-list-sublist')! as HTMLElement
                    el.style.display = 'block'
                    el = document.querySelector('#tools-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    el = document.querySelector('#homework-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    break;
                case '/tools':
                    var el = document.querySelector('#tools-list-sublist')! as HTMLElement
                    el.style.display = 'block'
                    el = document.querySelector('#projects-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    el = document.querySelector('#homework-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    break;
                case '/holiday-homeworks':
                    var el = document.querySelector('#homework-list-sublist')! as HTMLElement
                    el.style.display = 'block'
                    el = document.querySelector('#tools-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    el = document.querySelector('#projects-list-sublist')! as HTMLElement
                    el.style.display = 'none'
                    break;
                default:
                    break;
            }
        }
    }
}

function closeNavDrawer() {
    var navDrawer = document.querySelector!('#nav-drawer') as any
    navDrawer.opened = false;
    document.querySelector('main')!.classList.remove('scrim-background');
    var navButtonMobile = document.querySelector('#nav-button-mobile')! as any
    navButtonMobile.selected = false
}


function alertMd(title: String = "Alert!", message: String) {
    document.querySelector('body')!.appendChild(document.createElement('md-dialog'))
    var dialog = document.querySelector('md-dialog') as any
    dialog.type = 'alert'
    dialog.innerHTML = `
    <div slot="headline">${title}</div>
    <form id="form" slot="content" method="dialog">
        ${message}
    </form>
    <div slot="actions">
        <md-text-button form="form" value="ok">OK</md-text-button>
    </div>
    `
    dialog.open = true
    dialog.onsubmit = function (event: any) {
        event.preventDefault();
        dialog.remove()
    }
}

function confirmMd(title: String = "Confirm!", message: String, onConfirm: Function, onCancel: Function, confirmText: String = "Confirm", cancelText: String = "Cancel") {
    document.querySelector('body')!.appendChild(document.createElement('md-dialog'))
    var dialog = document.querySelector('md-dialog') as any
    dialog.type = 'confirm'
    dialog.innerHTML = `
    <div slot="headline">${title}</div>
    <md-icon slot="icon">report</md-icon>
    <form id="form" slot="content" method="dialog">
      ${message}
    </form>
    <div slot="actions">
      <md-text-button form="form" value="confirm">${confirmText}</md-text-button>
      <md-filled-tonal-button form="form" value="cancel">${cancelText}</md-filled-tonal-button>
    </div>
    `
    dialog.open = true
    return new Promise((resolve, reject) => {
        dialog.onsubmit = function (event: any) {
            event.preventDefault();
            resolve(event.submitter.value);
            if (event.submitter.value === 'confirm') {
                onConfirm()
            }
            else {
                onCancel()
            }
            dialog.remove()
        }
    })
}