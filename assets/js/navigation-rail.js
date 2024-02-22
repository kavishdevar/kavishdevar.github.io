// Custom element `md-navigation-rail`

class MdNavigationRail extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <div class='md-navigation-rail'>
        <slot name='navigation-button' class="md-navigation-rail__navigation-icon" style='padding: 20px;'></slot>
        </div>
        `;
        const cssText = `
            .md-navigation-rail {
                height: 56px;
                background-color: var(--md-sys-color-surface-container);
                color: var(--md-sys-color-on-surface);
                font-size: 20px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                width: 100%;
            }
            `;

        const style = document.createElement('style');
        style.textContent = cssText;
        this.shadowRoot.appendChild(style);
    }
}
window.customElements.define('md-navigation-rail', MdNavigationRail);