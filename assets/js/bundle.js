/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeChanger = void 0;
require("@material/web/focus/md-focus-ring.js");
require("@material/web/icon/icon.js");
require("@material/web/labs/segmentedbutton/outlined-segmented-button.js");
require("@material/web/labs/segmentedbuttonset/outlined-segmented-button-set.js");
require("./copy-code-button.js");
require("./hct-slider.js");
const lit_1$1 = require("lit");
const decorators_js_1$1 = require("lit/decorators.js");
const live_js_1 = require("lit/directives/live.js");
const color_events_js_1 = require("./color-events.js");
const material_color_helpers_js_1 = require("./material-color-helpers.js");
const theme_js_1 = require("./theme.js");
/**
 * A small set of controls that allows the user to change the theme and preview
 * color values.
 */
let ThemeChanger = class ThemeChanger extends lit_1$1.LitElement {
    static shadowRootOptions = {
        ...lit_1$1.LitElement.shadowRootOptions,
        delegatesFocus: true,
    };
    /**
     * The currently selected color mode.
     */
    selectedColorMode = null;
    /**
     * The currently selected hex color.
     *
     * NOTE: Hex colors are in the srgb color space and HCT has a much larger, so
     * this value is a clipped value of HCT.
     */
    hexColor = '';
    /**
     * The current hue value of the hue slider.
     */
    hue = 0;
    /**
     * The crrent value of the chroma slider.
     */
    chroma = 0;
    /**
     * The current value of the tone slider.
     */
    tone = 0;
    inputEl;
    sliders;
    render() {
        return (0, lit_1$1.html) `
      <div id="head-wrapper">
        <h2> Theme Controls </h2>
        <copy-code-button
          button-title="Copy current theme to clipboard"
          label="Copy current theme"
          .getCopyText=${theme_js_1.getCurrentThemeString}>
        </copy-code-button>
      </div>
      ${this.renderHexPicker()} ${this.renderHctPicker()}
      ${this.renderColorModePicker()}
    `;
    }
    /**
     * Renders a circular native color picker with a focus ring.
     */
    renderHexPicker() {
        return (0, lit_1$1.html) `<div>
      <label id="hex" for="color-input">
        <span class="label">Hex Source Color</span>
        <span class="input-wrapper">
          <div class="overflow">
            <input
              id="color-input"
              @input=${this.onHexPickerInput}
              type="color"
              .value=${(0, live_js_1.live)(this.hexColor)} />
          </div>
          <md-focus-ring for="color-input"></md-focus-ring>
        </span>
      </label>
    </div>`;
    }
    /**
     * Renders the three hct color pickers.
     */
    renderHctPicker() {
        return (0, lit_1$1.html) `<div class="sliders">
      <hct-slider
        .value=${(0, live_js_1.live)(this.hue)}
        type="hue"
        label="Hue"
        max="360"
        @input=${this.onSliderInput}></hct-slider>
      <hct-slider
        .value=${(0, live_js_1.live)(this.chroma)}
        .color=${this.hexColor}
        type="chroma"
        label="Chroma"
        max="150"
        @input=${this.onSliderInput}></hct-slider>
      <hct-slider
        .value=${(0, live_js_1.live)(this.tone)}
        type="tone"
        label="Tone"
        max="100"
        @input=${this.onSliderInput}></hct-slider>
    </div>`;
    }
    /**
     * Renders the color mode segmented button set picker.
     */
    renderColorModePicker() {
        return (0, lit_1$1.html) `<md-outlined-segmented-button-set
      @segmented-button-set-selection=${this.onColorModeSelection}
      aria-label="Color mode">
      ${this.renderModeButton('dark', 'dark_mode')}
      ${this.renderModeButton('auto', 'brightness_medium')}
      ${this.renderModeButton('light', 'light_mode')}
    </md-outlined-segmented-button-set>`;
    }
    /**
     * Renders a color mode segmented button.
     *
     * @param mode Sets the value and the title of the button to the given color
     *     mode.
     * @param icon The icon to display in the button.
     */
    renderModeButton(mode, icon) {
        return (0, lit_1$1.html) `<md-outlined-segmented-button
      data-value=${mode}
      title=${mode}
      aria-label="${mode} color scheme"
      .selected=${this.selectedColorMode === mode}>
      <md-icon slot="icon">${icon}</md-icon>
    </md-outlined-segmented-button>`;
    }
    onSliderInput() {
        for (const slider of this.sliders) {
            this[slider.type] = slider.value;
        }
        this.hexColor = (0, material_color_helpers_js_1.hexFromHct)(this.hue, this.chroma, this.tone);
        this.dispatchEvent(new color_events_js_1.ChangeColorEvent(this.hexColor));
    }
    /**
     * Updates the HCT sliders by converting a hex color to HCT.
     *
     * @param hexColor The hex color to convert to HCT and update the sliders.
     */
    updateHctFromHex(hexColor) {
        const hct = (0, material_color_helpers_js_1.hctFromHex)(hexColor);
        this.hue = hct.hue;
        this.chroma = hct.chroma;
        this.tone = hct.tone;
    }
    onHexPickerInput() {
        this.hexColor = this.inputEl.value;
        this.updateHctFromHex(this.hexColor);
        this.dispatchEvent(new color_events_js_1.ChangeColorEvent(this.hexColor));
    }
    async firstUpdated() {
        if (!this.selectedColorMode) {
            // localStorage is not available on server so must do this here.
            this.selectedColorMode = (0, theme_js_1.getCurrentMode)();
        }
        if (!this.hexColor) {
            // localStorage is not available on server so must do this here.
            this.hexColor = (0, theme_js_1.getCurrentSeedColor)();
        }
        this.updateHctFromHex(this.hexColor);
    }
    onColorModeSelection(e) {
        const { button } = e.detail;
        const value = button.dataset.value;
        this.selectedColorMode = value;
        this.dispatchEvent(new color_events_js_1.ChangeDarkModeEvent(value));
    }
    static styles = (0, lit_1$1.css) `
    :host {
      /* These are the default values, but we don't want the alignment to break
       * in case the token values are updated.
       */
      --_copy-button-button-size: 40px;
      --_copy-button-icon-size: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      margin: var(--catalog-spacing-m) var(--catalog-spacing-l);
    }

    :host > * {
      margin-block-end: var(--catalog-spacing-l);
    }

    :host > *:last-child {
      margin-block-end: 0;
    }

    #head-wrapper {
      display: flex;
      align-items: space-between;
    }

    input {
      border: none;
      background: none;
    }

    .sliders,
    #hex {
      padding-inline: var(--catalog-spacing-m);
      border-radius: var(--catalog-shape-l);
      background-color: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-on-surface-variant);

      /* Default track color is inaccessible in a surface-variant */
      --md-slider-inactive-track-color: var(--md-sys-color-on-surface-variant);
    }

    hct-slider {
      display: block;
      margin-block: 24px;
    }

    h2 {
      margin: 0;
      text-align: center;
      position: relative;
      height: var(--_copy-button-icon-size);
    }

    copy-code-button {
      --md-icon-button-icon-size: var(--_copy-button-icon-size);
      --md-icon-button-state-layer-width: var(--_copy-button-button-size);
      --md-icon-button-state-layer-height: var(--_copy-button-button-size);
      /*
       * Center the copy icon with the h2 text
       * -(icon button size - intrinsic icon size) / 2
       */
      --_inline-block-inset: calc(
        -1 * (var(--_copy-button-button-size) - var(--_copy-button-icon-size)) /
          2
      );
      --catalog-copy-code-button-inset: var(--_inline-block-inset) 0 auto auto;
      position: static;
    }

    #hex {
      display: flex;
      padding: 12px;
      align-items: center;
    }

    #hex .label {
      flex-grow: 1;
    }

    #hex .input-wrapper {
      box-sizing: border-box;
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      border: 1px solid var(--md-sys-color-on-secondary-container);
      position: relative;
    }

    #hex .input-wrapper,
    #hex md-focus-ring {
      border-radius: 50%;
    }

    .overflow {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #hex input {
      min-width: 200%;
      min-height: 200%;
    }

    @media (forced-colors: active) {
      #hex,
      .sliders {
        box-sizing: border-box;
        border: 1px solid CanvasText;
      }
    }
  `;
};
exports.ThemeChanger = ThemeChanger;
__decorate$1([
    (0, decorators_js_1$1.state)()
], ThemeChanger.prototype, "selectedColorMode", void 0);
__decorate$1([
    (0, decorators_js_1$1.state)()
], ThemeChanger.prototype, "hexColor", void 0);
__decorate$1([
    (0, decorators_js_1$1.state)()
], ThemeChanger.prototype, "hue", void 0);
__decorate$1([
    (0, decorators_js_1$1.state)()
], ThemeChanger.prototype, "chroma", void 0);
__decorate$1([
    (0, decorators_js_1$1.state)()
], ThemeChanger.prototype, "tone", void 0);
__decorate$1([
    (0, decorators_js_1$1.query)('input')
], ThemeChanger.prototype, "inputEl", void 0);
__decorate$1([
    (0, decorators_js_1$1.queryAll)('hct-slider')
], ThemeChanger.prototype, "sliders", void 0);
exports.ThemeChanger = ThemeChanger = __decorate$1([
    (0, decorators_js_1$1.customElement)('theme-changer')
], ThemeChanger);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavDrawer = void 0;
const motion_1 = require("@lit-labs/motion");
const animation_js_1 = require("@material/web/internal/motion/animation.js");
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
const drawer_open_state_js_1 = require("./drawer-open-state.js");
const inert_js_1 = require("./inert.js");
const signal_element_js_1 = require("./signal-element.js");
/**
 * A layout element that positions the top-app-bar, the main page content, and
 * the side navigation drawer.
 *
 * The drawer will automatically set itself as collapsible at narrower page
 * widths, and position itself inline with the page at wider page widths. Most
 * importantly, this sidebar is SSR compatible.
 */
let NavDrawer = class NavDrawer extends (0, signal_element_js_1.SignalElement)(lit_1.LitElement) {
    /**
     * Whether or not the side drawer is collapsible or inline.
     */
    isCollapsible = false;
    /**
     * Whether or not the TOC should be rendered.
     */
    hasToc = false;
    pageTitle = '';
    lastDrawerOpen = drawer_open_state_js_1.drawerOpenSignal.value;
    render() {
        const showModal = this.isCollapsible && drawer_open_state_js_1.drawerOpenSignal.value;
        // Values taken from internal material motion spec
        const drawerSlideAnimationDuration = showModal ? 500 : 150;
        const drawerContentOpacityDuration = showModal ? 300 : 150;
        const scrimOpacityDuration = 150;
        const drawerSlideAnimationEasing = showModal
            ? animation_js_1.EASING.EMPHASIZED
            : animation_js_1.EASING.EMPHASIZED_ACCELERATE;
        return (0, lit_1.html) `
      <div class="root">
        <slot name="top-app-bar"></slot>
        <div class="body  ${drawer_open_state_js_1.drawerOpenSignal.value ? 'open' : ''}">
          <div class="spacer" ?inert=${inert_js_1.inertSidebarSignal.value}>
            ${showModal
            ? (0, lit_1.html) `<div
                  class="scrim"
                  @click=${this.onScrimClick}
                  ${(0, motion_1.animate)({
                properties: ['opacity'],
                keyframeOptions: {
                    duration: scrimOpacityDuration,
                    easing: 'linear',
                },
                in: motion_1.fadeIn,
                out: motion_1.fadeOut,
            })}></div>`
            : lit_1.nothing}
            <aside
              ?inert=${this.isCollapsible && !drawer_open_state_js_1.drawerOpenSignal.value}
              ${(0, motion_1.animate)({
            properties: ['transform'],
            keyframeOptions: {
                duration: drawerSlideAnimationDuration,
                easing: drawerSlideAnimationEasing,
            },
        })}>
              <div class="scroll-wrapper">
                <slot
                  ${(0, motion_1.animate)({
            properties: ['opacity'],
            keyframeOptions: {
                duration: drawerContentOpacityDuration,
                easing: 'linear',
            },
        })}></slot>
              </div>
            </aside>
          </div>
          <div class="panes">
            ${this.renderTocPane(showModal)}${this.renderContent(showModal)}
          </div>
        </div>
      </div>
    `;
    }
    renderContent(showModal) {
        return (0, lit_1.html) ` <div
      class="pane content-pane"
      ?inert=${showModal || inert_js_1.inertContentSignal.value}>
      <div class="scroll-wrapper">
        <div class="content">
          <slot name="app-content"></slot>
        </div>
      </div>
    </div>`;
    }
    renderTocPane(showModal) {
        if (!this.hasToc) {
            return lit_1.nothing;
        }
        return (0, lit_1.html) ` <div
      class="pane toc"
      ?inert=${showModal || inert_js_1.inertContentSignal.value}>
      <div class="scroll-wrapper">
        <p>On this page:</p>
        <h2>${this.pageTitle}</h2>
        <slot name="toc"></slot>
      </div>
    </div>`;
    }
    /**
     * Closes the drawer on scrim click.
     */
    onScrimClick() {
        drawer_open_state_js_1.drawerOpenSignal.value = false;
    }
    firstUpdated() {
        const queryResult = window.matchMedia('(max-width: 1500px)');
        this.isCollapsible = queryResult.matches;
        // Listen for page resizes to mark the drawer as collapsible.
        queryResult.addEventListener('change', (e) => {
            this.isCollapsible = e.matches;
        });
    }
    updated(changed) {
        super.updated(changed);
        if (this.lastDrawerOpen !== drawer_open_state_js_1.drawerOpenSignal.value &&
            drawer_open_state_js_1.drawerOpenSignal.value &&
            this.isCollapsible) {
            this.querySelector('md-list.nav md-list-item[tabindex="0"]')?.focus();
        }
    }
    static styles = (0, lit_1.css) `
    :host {
      --_drawer-width: var(--catalog-drawer-width, 300px);
      /* When in wide mode inline start margin is handled by the sidebar */
      --_pane-margin-inline-start: 0px;
      --_pane-margin-inline-end: var(--catalog-spacing-l);
      --_pane-margin-block-end: var(--catalog-spacing-l);
      --_toc-pane-width: 250px;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    ::slotted(nav) {
      list-style: none;
    }

    .body {
      display: flex;
      flex-grow: 1;
    }

    .spacer {
      position: relative;
      transition: min-width 0.5s cubic-bezier(0.3, 0, 0, 1);
    }

    .spacer,
    aside {
      min-width: var(--_drawer-width);
      max-width: var(--_drawer-width);
    }

    .pane {
      box-sizing: border-box;
      overflow: auto;
      width: 100%;
      /* Explicit height to make overflow work */
      height: calc(
        100dvh - var(--catalog-top-app-bar-height) -
          var(--_pane-margin-block-end)
      );
      background-color: var(--md-sys-color-surface);
      border-radius: var(--catalog-shape-xl);
    }

    .pane,
    .panes {
      /* emphasized – duration matching render fn for sidebar */
      transition: 0.5s cubic-bezier(0.3, 0, 0, 1);
      transition-property: margin, height, border-radius, max-width, width;
    }

    .panes {
      display: flex;
      justify-content: start;
      flex-direction: row-reverse;
      gap: var(--_pane-margin-inline-end);
      margin-inline: var(--_pane-margin-inline-start)
        var(--_pane-margin-inline-end);
      width: 100%;
      max-width: calc(
        100% - var(--_drawer-width) - var(--_pane-margin-inline-start) -
          var(--_pane-margin-inline-end)
      );
    }

    .pane.content-pane {
      flex-grow: 1;
    }

    .pane.toc {
      width: auto;
      box-sizing: border-box;
      width: var(--_toc-pane-width);
    }

    .toc .scroll-wrapper {
      padding-inline: var(--catalog-spacing-xl);
    }

    .pane.toc p {
      margin-block: 0;
      font-size: var(--catalog-label-s-font-size);
    }

    .pane.toc h2 {
      margin-block: var(--catalog-spacing-s) var(--catalog-spacing-m);
      font-size: var(--catalog-headline-s-font-size);
    }

    .content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-inline: var(--catalog-spacing-xl);
      width: 100%;
    }

    .content slot {
      display: block;
      width: 100%;
      max-width: min(100%, var(--_max-width));
    }

    aside {
      transition: transform 0.5s cubic-bezier(0.3, 0, 0, 1);
      position: fixed;
      isolation: isolate;
      inset: var(--catalog-top-app-bar-height) 0 0 0;
      z-index: 12;
      background-color: var(--md-sys-color-surface-container);
      overflow: hidden;
    }

    .scroll-wrapper {
      overflow-y: auto;
      max-height: 100%;
      border-radius: inherit;
      box-sizing: border-box;
    }

    .pane .scroll-wrapper {
      padding-block: var(--catalog-spacing-xl);
    }

    aside slot {
      display: block;
    }

    .scrim {
      background-color: rgba(0, 0, 0, 0.32);
    }

    @media (max-width: 900px) {
      .pane.toc {
        display: none;
      }
    }

    @media (max-width: 1500px) {
      .spacer {
        min-width: 0px;
      }

      .panes {
        max-width: calc(
          100% - var(--_pane-margin-inline-start) -
            var(--_pane-margin-inline-end)
        );
      }

      .content {
        max-width: 100vw;
        padding-inline: var(--catalog-spacing-xl);
      }

      .scrim {
        position: fixed;
        inset: 0;
      }

      aside {
        transition: unset;
        transform: translateX(-100%);
        border-radius: 0 var(--catalog-shape-xl) var(--catalog-shape-xl) 0;
      }

      :host {
        --_pane-margin-inline-start: var(--catalog-spacing-xl);
      }

      .open aside {
        transform: translateX(0);
      }

      aside slot {
        opacity: 0;
      }

      .open aside slot {
        opacity: 1;
      }

      .open .scrim {
        inset: 0;
        z-index: 11;
      }
    }

    @media (max-width: 600px) {
      .pane {
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      }

      :host {
        --_pane-margin-block-end: 0px;
        --_pane-margin-inline-start: 0px;
        --_pane-margin-inline-end: 0px;
      }
    }

    /* On desktop, make the scrollbars less blocky so you can see the border
     * radius of the pane. On most mobile platforms, these scrollbars are hidden
     * by default. It'll still unfortunately render on top of the border radius.
     */
    @media (pointer: fine) {
      :host {
        --_scrollbar-width: 8px;
      }

      .scroll-wrapper {
        /* firefox */
        scrollbar-color: var(--md-sys-color-primary) transparent;
        scrollbar-width: thin;
      }

      .content {
        /* adjust for the scrollbar width */
        padding-inline-end: calc(
          var(--catalog-spacing-xl) - var(--_scrollbar-width)
        );
      }

      /* Chromium + Safari */
      .scroll-wrapper::-webkit-scrollbar {
        background-color: transparent;
        width: var(--_scrollbar-width);
      }

      .scroll-wrapper::-webkit-scrollbar-thumb {
        background-color: var(--md-sys-color-primary);
        border-radius: calc(var(--_scrollbar-width) / 2);
      }
    }

    @media (forced-colors: active) {
      .pane {
        border: 1px solid CanvasText;
      }

      @media (max-width: 1500px) {
        aside {
          box-sizing: border-box;
          border: 1px solid CanvasText;
        }

        .scrim {
          background-color: rgba(0, 0, 0, 0.75);
        }
      }

      @media (pointer: fine) {
        .scroll-wrapper {
          /* firefox */
          scrollbar-color: CanvasText transparent;
        }

        .scroll-wrapper::-webkit-scrollbar-thumb {
          /* Chromium + Safari */
          background-color: CanvasText;
        }
      }
    }
  `;
};
exports.NavDrawer = NavDrawer;
__decorate([
    (0, decorators_js_1.state)()
], NavDrawer.prototype, "isCollapsible", void 0);
__decorate([
    (0, decorators_js_1.property)({ type: Boolean, attribute: 'has-toc' })
], NavDrawer.prototype, "hasToc", void 0);
__decorate([
    (0, decorators_js_1.property)({ attribute: 'page-title' })
], NavDrawer.prototype, "pageTitle", void 0);
exports.NavDrawer = NavDrawer = __decorate([
    (0, decorators_js_1.customElement)('nav-drawer')
], NavDrawer);
