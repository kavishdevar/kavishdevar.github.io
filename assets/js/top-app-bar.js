// Custom Element for Top App Bar
class TopAppBar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <div class="topappbar surface" id="topappbar" name="topappbar">
            <md-elevation style="--md-elevation-level: 2; display: none;" id="topappbar__elevation"></md-elevation>
            <div class="topappbar__row" id="topappbarrow">
                <section class="topappbar__section topappbar__section--align-start">
                    <slot name='navigation-button' class="topappbar__navigation-icon" style='padding: 20px;'></slot>
                    <span class="topappbar__title"><slot name='title'>THIS SHOULDN'T BE VISIBLE</slot></span>
                </section>
                <section class="topappbar__section topappbar__section--align-center">
                    <slot name="center"></slot>
                </section>
                <section class="topappbar__section topappbar__section--align-end">
                    <slot name="end"></slot>
                </section>
            </div>
        </div>
        `;
        const cssText = `
            .topappbar {
                height: 56px;
                background-color: var(--md-top-app-bar-background-color, --md-sys-color-surface-container);
                color: var(--md-top-app-bar-color, --md-sys-color-on-surface);
                font-size: 20px;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                width: 100%;
            }

            .topappbar__title {
                vertical-align: middle;
                margin: 5px;
            }

            .topappbar__row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                height: 56px;
                width: 100%;
            }
            
            .topappbar__section {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin: 20px;
            }
            
            .topappbar__navigation-icon {
                color: var('--md-sys-color-on-surface');
                vertical-align: middle;
            }
            
            .topappbar__section--align-start {
                justify-content: flex-start;
            }
            
            .topappbar__section--align-end {
                justify-content: flex-end;
            }
            
            .topappbar__section--align-center {
                justify-content: center;
            }
            
            .topappbar__action-item {
                color: var('--md-sys-color-on-surface');
                cursor: pointer;
                font-size: 24px;
            }
            
            .topappbar.bottom {
                position: absolute;
                bottom: 0;
            }
            
            .topappbar.top {
                position: fixed;
                top: 0;
            }
        `
        const sheet = new CSSStyleSheet
        sheet.replaceSync(cssText)
        this.shadowRoot.adoptedStyleSheets.push(sheet)
    }
}
customElements.define('md-top-app-bar', TopAppBar);
