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
                margin: 0;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background-color: var('--md-sys-color-surface');
                color: var(--md-sys-color-on-surface);
                --md-elevation-level: 2;
                padding-left: 16px;
                padding-right: 16px;
                height: 56px;
                animation-name: unscroll;
                animation-duration: .2s;
                background-color: var('--md-sys-color-surface-variant');
                -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
                -moz-animation-fill-mode: forwards;    /* FF 5+ */
                -o-animation-fill-mode: forwards;      /* Not implemented yet */
                -ms-animation-fill-mode: forwards;     /* IE 10+ */
                animation-fill-mode: forwards;       /* When the spec is finished */
            }
            .topappbar__nav {
                animation-name: scroll;
                animation-duration: .2s;
                transition:all 1s ease;
                -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
                -moz-animation-fill-mode: forwards;    /* FF 5+ */
                -o-animation-fill-mode: forwards;      /* Not implemented yet */
                -ms-animation-fill-mode: forwards;     /* IE 10+ */
                animation-fill-mode: forwards;       /* When the spec is finished */
            }
            .topappbar__fixed {
                animation-name: scroll;
                animation-duration: .2s;
                position: fixed;
                top: 0;
                left: 0;
                margin: 0;
                width: 98%;
                z-index: 13;
                transition:all 1s ease;
                background-color: var('--md-sys-color-surface-variant');
                -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
                -moz-animation-fill-mode: forwards;    /* FF 5+ */
                -o-animation-fill-mode: forwards;      /* Not implemented yet */
                -ms-animation-fill-mode: forwards;     /* IE 10+ */
                animation-fill-mode: forwards;       /* When the spec is finished */
                color: var(--md-sys-color-on-surface-variant);
            }
            
            @keyframes scroll {
                from {background-color: var(--md-sys-color-surface)}
                to {background-color: var(--md-sys-color-surface-variant)}
            }
            @keyframes unscroll {}
                from {background-color: var(--md-sys-color-surface-variant)
                to {background-color: var(--md-sys-color-surface)}
            }
            .sticky + .content {
                padding-top: 102px;
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
            }
            
            .topappbar__navigation-icon {
                color: var('--md-sys-color-on-surface');
                cursor: pointer;
                font-size: 24px;
                margin-right: 16px;
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
                margin-left: 16px;
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
        var topappbar = this.shadowRoot.getElementById("topappbar");
        var topappbar__elevation = this.shadowRoot.getElementById("topappbar__elevation");
        function fixtopappbar() {
            if (window.scrollY > 0) {
                fixTopAppBar();
            } else {
                unfixTopAppBar();
            }
        };
        
        function fixTopAppBar() {
            topappbar.classList.add('topappbar__fixed')
            topappbar__elevation.style.display = 'fixed'
        }

        function unfixTopAppBar() {
            topappbar.classList.remove('topappbar__fixed')
            topappbar__elevation.style.display = 'none'
        }
        window.addEventListener('scroll', fixtopappbar);
    }
}
customElements.define('md-top-app-bar', TopAppBar);
