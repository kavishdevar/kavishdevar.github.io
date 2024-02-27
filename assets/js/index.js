class MdNavigationRail extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
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
            `;
        const style = document.createElement('style');
        style.textContent = cssText;
        this.shadowRoot.appendChild(style);
        customElements.whenDefined('md-navigation-tab').then(() => {
            this.tabs = document.querySelectorAll('md-navigation-tab');
            this.tabs.forEach(tab => {
                var tabEl = tab;
                var shadow = tabEl.shadowRoot;
                setTimeout(() => {
                    if (tabEl.shadowRoot != null && tabEl.shadowRoot.querySelector('.md3-navigation-tab__icon-content') != null) {
                        var tab_icon_content = tabEl.shadowRoot.querySelector('.md3-navigation-tab__icon-content');
                        tab_icon_content.style.borderRadius = '28px';
                        tabEl.onmouseover = function () {
                            tab_icon_content.style.backgroundColor = 'var(--md-sys-color-surface-variant)';
                            var xa = tabEl;
                            var x = xa.getAttribute('view');
                            x = `${slugify(x).replace('/', '')}`;
                            if (x == 'projects') {
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#projects-list-sublist');
                                    el.style.display = 'block';
                                    el = document.querySelector('#tools-list-sublist');
                                    el.style.display = 'none';
                                    el = document.querySelector('#homework-list-sublist');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                            else if (x == 'tools') {
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#tools-list-sublist');
                                    el.style.display = 'block';
                                    el = document.querySelector('#projects-list-sublist');
                                    el.style.display = 'none';
                                    el = document.querySelector('#homework-list-sublist');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                            else if (x == 'holiday-homeworks') {
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#homework-list-sublist');
                                    el.style.display = 'block';
                                    el = document.querySelector('#tools-list-sublist');
                                    el.style.display = 'none';
                                    el = document.querySelector('#projects-list-sublist');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                        };
                        tabEl.onmouseleave = function () { tab_icon_content.style.backgroundColor = ''; };
                    }
                    tabEl.addEventListener('click', () => {
                        this.tabs.forEach(tab => tab.removeAttribute('active'));
                        tab.setAttribute('active', '');
                        changeView(tab.getAttribute('view'));
                        if (window.innerWidth < 1600) {
                            closeNavDrawer();
                        }
                        else {
                            if (tab.getAttribute('view') === '/projects') {
                                var el = document.querySelector('#projects-list-sublist');
                                el.style.display = 'block';
                                el = document.querySelector('#tools-list-sublist');
                                el.style.display = 'none';
                                el = document.querySelector('#homework-list-sublist');
                                el.style.display = 'none';
                                openNavDrawer();
                            }
                            else if (tab.getAttribute('view') === '/tools') {
                                var el = document.querySelector('#tools-list-sublist');
                                el.style.display = 'block';
                                el = document.querySelector('#projects-list-sublist');
                                el.style.display = 'none';
                                el = document.querySelector('#homework-list-sublist');
                                el.style.display = 'none';
                                openNavDrawer();
                            }
                            else if (tab.getAttribute('view') === '/holiday-homeworks') {
                                var el = document.querySelector('#homework-list-sublist');
                                el.style.display = 'block';
                                el = document.querySelector('#tools-list-sublist');
                                el.style.display = 'none';
                                el = document.querySelector('#projects-list-sublist');
                                el.style.display = 'none';
                                openNavDrawer();
                            }
                            else {
                                var el = document.querySelector('#projects-list-sublist');
                                el.style.display = 'none';
                                el = document.querySelector('#tools-list-sublist');
                                el.style.display = 'none';
                                el = document.querySelector('#homework-list-sublist');
                                el.style.display = 'none';
                                closeNavDrawer();
                                var main = document.querySelector('main');
                                main.style.marginLeft = '80px';
                            }
                        }
                    });
                });
            });
        });
    }
    setActiveTabByView(view) {
        this.tabs.forEach(tab => {
            if (tab.getAttribute('view') === view) {
                tab.setAttribute('active', '');
            }
            else {
                tab.removeAttribute('active');
            }
        });
    }
}
window.customElements.define('md-navigation-rail', MdNavigationRail);
function changeView(url) {
    url = `${location.origin}${url.replace(' ', '-').toLowerCase()}`;
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
            var rail = document.querySelector('md-navigation-rail');
            history.pushState({ page: url.toString().split('/').slice(-1).toString().toUpperCase() }, url.toString().split('/').slice(-1).toString().toUpperCase(), url.toString());
            rail.setActiveTabByView(`/${location.pathname.split('/')[1]}`);
            document.querySelectorAll('a').forEach(a => a.onclick = function (e) {
                e.preventDefault();
                changeView(a.getAttribute('href'));
            });
            document.querySelectorAll('md-list-item').forEach(b => {
                var _a, _b;
                var currentPath = location.pathname;
                if (currentPath.endsWith('/')) {
                    currentPath = currentPath.slice(0, -1);
                }
                var newpath = (_b = (_a = b.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.getAttribute('href');
                if (newpath.endsWith('/')) {
                    newpath = newpath.slice(0, -1);
                }
                if (newpath === currentPath) {
                    b.classList.add('active-item');
                }
                else {
                    b.classList.remove('active-item');
                }
            });
            var categories = document.querySelector('.category-list');
            for (let i = 0; i < categories.children.length; i++) {
                var category = categories.children[i];
                if (category.href.toLowerCase().replace('/', '') == location.pathname.split('/')[1]) {
                    category.classList.add('active-item');
                }
                else if (category.innerText.toLowerCase() == 'home' && location.pathname == '/') {
                    category.classList.add('active-item');
                }
                else {
                    category.classList.remove('active-item');
                }
            }
        }
    };
}
window.onpopstate = function () {
    changeView(location.pathname);
};
window.onload = function () {
    var main = document.querySelector('main');
    var aside = document.querySelector('aside');
    if (window.innerWidth < 1100) {
        var sublists = document.querySelectorAll('.sublist');
        for (let i = 0; i < sublists.length; i++) {
            var sublist = sublists[i];
            sublist.style.display = 'none';
        }
    }
    document.querySelectorAll('a').forEach(a => a.onclick = function (e) {
        e.preventDefault();
        changeView(a.getAttribute('href'));
    });
    document.querySelectorAll('md-list-item').forEach(a => {
        var _a;
        return ((_a = a.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a')).onclick = function (e) {
            var _a, _b;
            e.preventDefault();
            changeView((_b = (_a = a.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.getAttribute('href'));
            a.classList.add('active-item');
            document.querySelectorAll('md-list-item').forEach(b => {
                if (b != a) {
                    b.classList.remove('active-item');
                }
            });
        };
    });
    document.querySelector('.category-list').querySelectorAll('md-list-item').forEach(a => {
        var _a;
        return ((_a = a.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a')).onclick = function (e) {
            var _a, _b;
            e.preventDefault();
            var ahref = (_b = (_a = a.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.getAttribute('href');
            changeView(ahref);
            a.classList.add('active-item');
            document.querySelectorAll('md-list-item').forEach(b => {
                if (b != a) {
                    b.classList.remove('active-item');
                }
            });
            if (window.innerWidth < 1100) {
                closeNavDrawer();
            }
        };
    });
    changeView(location.pathname);
    if (window.innerWidth > 1600 && location.pathname != '/' && location.pathname != ('/about')) {
        main.style.marginLeft = '330px';
        if (location.pathname.split('/')[1] == 'projects') {
            var el = document.querySelector('#projects-list-sublist');
            el.style.display = 'block';
            el = document.querySelector('#tools-list-sublist');
            el.style.display = 'none';
            el = document.querySelector('#homework-list-sublist');
            el.style.display = 'none';
        }
        else if (location.pathname.split('/')[1] == 'tools') {
            var el = document.querySelector('#tools-list-sublist');
            el.style.display = 'block';
            el = document.querySelector('#projects-list-sublist');
            el.style.display = 'none';
            el = document.querySelector('#homework-list-sublist');
            el.style.display = 'none';
        }
        else if (location.pathname.split('/')[1] == 'holiday-homeworks') {
            var el = document.querySelector('#homework-list-sublist');
            el.style.display = 'block';
            el = document.querySelector('#tools-list-sublist');
            el.style.display = 'none';
            el = document.querySelector('#projects-list-sublist');
            el.style.display = 'none';
        }
        openNavDrawer();
    }
    window.onresize = function () {
        var _a, _b, _c;
        if (window.innerWidth > 1100 && window.innerWidth < 1600) {
            var el = document.querySelector('.nav-drawer-content');
            var lists = el.querySelectorAll('md-list');
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i];
                list.style.display = 'block';
                var sublists = list.querySelectorAll('md-list');
                for (let j = 0; j < sublists.length; j++) {
                    var sublist = sublists[j];
                    sublist.style.display = 'none';
                }
            }
            var categories = document.querySelector('.category-list');
            categories.style.display = 'none';
            closeNavDrawer();
            main.style.marginLeft = '80px';
        }
        else if (window.innerWidth > 1600) {
            var el = document.querySelector('.nav-drawer-content');
            var lists = el.querySelectorAll('md-list');
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i];
                list.style.display = 'block';
                var sublists = list.querySelectorAll('md-list');
                for (let j = 0; j < sublists.length; j++) {
                    var sublist = sublists[j];
                    sublist.style.display = 'block';
                }
            }
            main.style.marginLeft = '330px';
            openNavDrawer();
        }
        else {
            var el = document.querySelector('.nav-drawer-content');
            var lists = el.querySelectorAll('div');
            for (let i = 0; i < lists.length; i++) {
                var list = lists[i];
                if (((_a = list.querySelector('md-list-item')) === null || _a === void 0 ? void 0 : _a.innerText) != 'Projects overview' && ((_b = list.querySelector('md-list-item')) === null || _b === void 0 ? void 0 : _b.innerText) != 'Tools overview' && ((_c = list.querySelector('md-list-item')) === null || _c === void 0 ? void 0 : _c.innerText) != 'Holiday Homeworks overview') {
                    list.style.display = 'block';
                }
                else {
                    list.style.display = 'none';
                }
            }
            var categories = document.querySelector('.category-list');
            categories.style.display = 'block';
            closeNavDrawer();
        }
    };
};
function init(categories, projects, tools, homeworks) {
    var projectsEl = document.createElement('div');
    projectsEl.setAttribute('id', 'projects-list-sublist');
    projectsEl.classList.add('sublist');
    var toolsEl = document.createElement('div');
    toolsEl.setAttribute('id', 'tools-list-sublist');
    toolsEl.classList.add('sublist');
    var homeworkEl = document.createElement('div');
    homeworkEl.setAttribute('id', 'homework-list-sublist');
    homeworkEl.classList.add('sublist');
    var projectsList = document.createElement('md-list');
    var toolsList = document.createElement('md-list');
    var homeworkList = document.createElement('md-list');
    var projectsText = document.createElement('md-list-item');
    projectsText.innerText = 'Projects overview';
    projectsText.type = 'link';
    projectsText.href = '/projects';
    var toolsText = document.createElement('md-list-item');
    toolsText.type = 'link';
    toolsText.href = '/tools';
    toolsText.innerText = 'Tools overview';
    var homeworkText = document.createElement('md-list-item');
    homeworkText.type = 'link';
    homeworkText.href = '/holiday-homeworks';
    homeworkText.innerText = 'Holiday Homeworks overview';
    projectsEl.appendChild(projectsText);
    toolsEl.appendChild(toolsText);
    homeworkEl.appendChild(homeworkText);
    projectsEl.appendChild(projectsList);
    toolsEl.appendChild(toolsList);
    homeworkEl.appendChild(homeworkList);
    projects.keys().forEach(project => {
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = projects.get(project);
        listItem.innerText = project;
        projectsList.appendChild(listItem);
    });
    tools.keys().forEach(tool => {
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = tools.get(tool);
        listItem.innerText = tool;
        toolsList.appendChild(listItem);
    });
    homeworks.keys().forEach(homework => {
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = homeworks.get(homework);
        listItem.innerText = homework;
        homeworkList.appendChild(listItem);
    });
    var categoryEl = document.createElement('md-list');
    categoryEl.classList.add('category-list');
    for (let category of categories) {
        var categoryText = document.createElement('md-list-item');
        categoryText.innerText = category;
        categoryText.type = 'link';
        if (category == 'Home') {
            categoryText.href = '/';
        }
        else {
            categoryText.href = `/${slugify(category)}`;
        }
        categoryEl.appendChild(categoryText);
        document.querySelector('.nav-drawer-content').appendChild(categoryEl);
    }
    document.querySelector('.nav-drawer-content').appendChild(projectsEl);
    document.querySelector('.nav-drawer-content').appendChild(toolsEl);
    document.querySelector('.nav-drawer-content').appendChild(homeworkEl);
}
function slugify(string) {
    return string.toLowerCase().trim()
        .replace(' ', '-');
}
function toggleNavDrawer() {
    var navDrawer = document.querySelector('#nav-drawer');
    navDrawer.opened = !navDrawer.opened;
    document.querySelector('main').classList.toggle('scrim-background');
    document.querySelector('main').onclick = function () { closeNavDrawer(); };
}
function openNavDrawer() {
    var navDrawer = document.querySelector('#nav-drawer');
    navDrawer.opened = true;
    // document.querySelector('main')!.classList.add('scrim-background');
    // document.querySelector('main')!.onclick = function () { closeNavDrawer() }
    if (window.innerWidth < 1600 || location.pathname == '/' || location.pathname == '/about') {
        navDrawer.onmouseleave = function () { closeNavDrawer(); };
        document.querySelector('main').classList.add('scrim-background');
        document.querySelector('main').onclick = function () { closeNavDrawer(); };
    }
    else {
        navDrawer.onmouseleave = function () {
            if (location.pathname == '/' || location.pathname == '/about') {
                closeNavDrawer();
            }
            else if (location.pathname.split('/')[1] == 'projects') {
                var el = document.querySelector('#projects-list-sublist');
                el.style.display = 'block';
                el = document.querySelector('#tools-list-sublist');
                el.style.display = 'none';
                el = document.querySelector('#homework-list-sublist');
                el.style.display = 'none';
            }
            else if (location.pathname.split('/')[1] == 'tools') {
                var el = document.querySelector('#tools-list-sublist');
                el.style.display = 'block';
                el = document.querySelector('#projects-list-sublist');
                el.style.display = 'none';
                el = document.querySelector('#homework-list-sublist');
                el.style.display = 'none';
            }
            else if (location.pathname.split('/')[1] == 'holiday-homeworks') {
                var el = document.querySelector('#homework-list-sublist');
                el.style.display = 'block';
                el = document.querySelector('#tools-list-sublist');
                el.style.display = 'none';
                el = document.querySelector('#projects-list-sublist');
                el.style.display = 'none';
            }
        };
        document.querySelector('main').style.marginLeft = '330px';
    }
}
function closeNavDrawer() {
    var navDrawer = document.querySelector('#nav-drawer');
    navDrawer.opened = false;
    document.querySelector('main').classList.remove('scrim-background');
    var navButtonMobile = document.querySelector('#nav-button-mobile');
    navButtonMobile.selected = false;
}
