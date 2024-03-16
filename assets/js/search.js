class MdCardSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <md-filled-text-field class="md3__search" label="Search" placeholder="Search for a question" id="search">
                <md-icon slot="leading-icon">search</md-icon>
            </md-filled-text-field>
        `;
        const style = document.createElement("style");
        style.textContent = `
            .md3__search {
                width: 100%;
                margin-top: 20px;
                height: 70px;
                --md-filled-text-field-container-shape: 999px;
                --md-filled-field-label-text-line-height: 36px;
                --md-filled-field-label-text-size: 20px;
                --md-filled-field-outline-color: #000;
                --md-filled-field-active-indicator-color: transparent;
                --md-filled-field-hover-active-indicator-color: transparent;
                --md-filled-field-focus-active-indicator-color: transparent;
            }
        `
        this.shadowRoot.appendChild(style);
        var el = this.shadowRoot.getElementById("search");
        el.addEventListener("input", function () {
            var filter, cards, cardContainer, htmlContent, i;
            filter = el.value.toUpperCase();
            cardContainer = document.getElementById("card-container");
            cards = cardContainer.getElementsByClassName("card");
            for (i = 0; i < cards.length; i++) {
                htmlContent = cards[i].innerHTML;
                if (htmlContent.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = "";
                } else {
                    cards[i].style.display = "none";
                }
            }
        });
    }
}

customElements.define("md-card-search", MdCardSearch);