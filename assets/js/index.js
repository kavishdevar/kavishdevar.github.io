class MdNavigationRail extends HTMLElement {
    tabs;
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div class='md-navigation-rail'>
                <slot name='fab' class="md-navigation-rail__fab-icon"></slot>
                <slot class="md-navigation-rail__tabs"></slot>
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
                                // if screen size greater than 1100px
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#projects-list');
                                    el.style.display = 'block';
                                    el = document.querySelector('#tools-list');
                                    el.style.display = 'none';
                                    el = document.querySelector('#homework-list');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                            else if (x == 'tools') {
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#tools-list');
                                    el.style.display = 'block';
                                    el = document.querySelector('#projects-list');
                                    el.style.display = 'none';
                                    el = document.querySelector('#homework-list');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                            else if (x == 'holiday-homework') {
                                if (window.innerWidth > 1100) {
                                    var el = document.querySelector('#homework-list');
                                    el.style.display = 'block';
                                    el = document.querySelector('#tools-list');
                                    el.style.display = 'none';
                                    el = document.querySelector('#projects-list');
                                    el.style.display = 'none';
                                }
                                openNavDrawer();
                            }
                            else {
                                closeNavDrawer();
                            }
                        };
                        tabEl.onmouseleave = function () { tab_icon_content.style.backgroundColor = ''; };
                    }
                    tabEl.addEventListener('click', () => {
                        this.tabs.forEach(tab => tab.removeAttribute('active'));
                        tab.setAttribute('active', '');
                        changeView(tab.getAttribute('view'));
                    });
                });
            });
        });
    }
    setActiveTabByView(view) {
        // console.log(view)
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
                document.querySelector('aside')?.replaceWith(targetAside);
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
                document.querySelector('aside')?.remove();
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
                if (b.shadowRoot?.querySelector('a')?.getAttribute('href') === location.pathname) {
                    b.classList.add('active-item');
                }
                else {
                    b.classList.remove('active-item');
                }
            });
        }
    };
}
window.onpopstate = function () {
    changeView(location.pathname);
};
window.onload = function () {
    document.querySelectorAll('a').forEach(a => a.onclick = function (e) {
        e.preventDefault();
        changeView(a.getAttribute('href'));
    });
    changeView(location.pathname);
    document.querySelectorAll('md-list-item').forEach(a => (a.shadowRoot?.querySelector('a')).onclick = function (e) {
        e.preventDefault();
        changeView(a.shadowRoot?.querySelector('a')?.getAttribute('href'));
        a.classList.add('active-item');
        document.querySelectorAll('md-list-item').forEach(b => {
            if (b != a) {
                b.classList.remove('active-item');
            }
        });
        closeNavDrawer();
    });
    changeView(location.pathname);
};
function init(categories, projects, tools, homeworks) {
    // console.log(categories)
    // Aim is to create 3 seperate divs that contain a md-list with md-list-items for each category
    var projectsEl = document.createElement('div');
    projectsEl.setAttribute('id', 'projects-list');
    var toolsEl = document.createElement('div');
    toolsEl.setAttribute('id', 'tools-list');
    var homeworkEl = document.createElement('div');
    homeworkEl.setAttribute('id', 'homework-list');
    var projectsList = document.createElement('md-list');
    var toolsList = document.createElement('md-list');
    var homeworkList = document.createElement('md-list');
    var projectsText = document.createElement('md-list-item');
    projectsText.label = 'Projects overview';
    projectsText.type = 'link';
    projectsText.href = '/projects';
    var toolsText = document.createElement('md-list-item');
    toolsText.type = 'link';
    toolsText.href = '/tools';
    toolsText.label = 'Tools overview';
    var homeworkText = document.createElement('md-list-item');
    homeworkText.type = 'link';
    homeworkText.href = '/holiday-homeworks';
    homeworkText.label = 'Holiday Homeworks overview';
    projectsEl.appendChild(projectsText);
    toolsEl.appendChild(toolsText);
    homeworkEl.appendChild(homeworkText);
    projectsEl.appendChild(projectsList);
    toolsEl.appendChild(toolsList);
    homeworkEl.appendChild(homeworkList);
    console.log(projects);
    projects.keys().forEach(project => {
        console.log(project);
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = projects.get(project);
        listItem.innerHTML = project;
        projectsList.appendChild(listItem);
    });
    tools.keys().forEach(tool => {
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = tools.get(tool);
        listItem.innerHTML = tool;
        toolsList.appendChild(listItem);
    });
    homeworks.keys().forEach(homework => {
        var listItem = document.createElement('md-list-item');
        listItem.type = 'link';
        listItem.href = homeworks.get(homework);
        listItem.innerHTML = homework;
        homeworkList.appendChild(listItem);
    });
    const categoryDivider1 = document.createElement('md-divider');
    const categoryDivider2 = document.createElement('md-divider');
    categoryDivider1.classList.add('category-divider');
    categoryDivider2.classList.add('category-divider');
    document.querySelector('.nav-drawer-content').appendChild(projectsEl);
    document.querySelector('.nav-drawer-content').appendChild(categoryDivider1);
    document.querySelector('.nav-drawer-content').appendChild(toolsEl);
    document.querySelector('.nav-drawer-content').appendChild(categoryDivider2);
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
    navDrawer.onmouseleave = function () { closeNavDrawer(); };
    document.querySelector('main').classList.add('scrim-background');
}
function closeNavDrawer() {
    var navDrawer = document.querySelector('#nav-drawer');
    navDrawer.opened = false;
    document.querySelector('main').classList.remove('scrim-background');
    var navButtonMobile = document.querySelector('#nav-button-mobile');
    navButtonMobile.selected = false;
}
