// Custom element `md-navigation-rail`

class MdNavigationTabs extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
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
        this.shadowRoot.appendChild(style);
        // this element contains the tabs (md-navigation-tab) and the active tab can be set by toggling the `active` attribute
        setTimeout(() => { 
            this.tabs = document.querySelectorAll('md-navigation-tab');
            console.log(this.tabs);
            this.tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    this.tabs.forEach(tab => tab.removeAttribute('active'));
                    tab.setAttribute('active', '');
                    changeView(tab.getAttribute('view'));
                });
            });
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
        this.shadowRoot.innerHTML = `
            <div class='md-navigation-rail'>
                <slot name='fab' class="md-navigation-rail__fab-icon"></slot>
                <!-- <slot name='menubutton' class="md-navigation-rail__menubutton"></slot> -->
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
                padding-top: 30px;
            }
            .md-navigation-rail__menubutton {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 10px;
            }
            `;

        const style = document.createElement('style');
        style.textContent = cssText;
        this.shadowRoot.appendChild(style);
    }
}
window.customElements.define('md-navigation-rail', MdNavigationRail);