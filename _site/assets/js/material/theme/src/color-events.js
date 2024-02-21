/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Requests the global theme listener change the theme due to a color change.
 */
export class ChangeColorEvent extends Event {
    color;
    /**
     * @param color The new source color to apply.
     */
    constructor(color) {
        super('change-color', { bubbles: true, composed: true });
        this.color = color;
    }
}
/**
 * Requests the global theme listener change the theme due to a dark mode
 * change.
 */
export class ChangeDarkModeEvent extends Event {
    mode;
    /**
     * @param mode The new color mode to apply.
     */
    constructor(mode) {
        super('change-mode', { bubbles: true, composed: true });
        this.mode = mode;
    }
}
