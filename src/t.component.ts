import {customElement, LitElement, html } from "lit-element";

@customElement('t')
export class TComponent extends LitElement {
    protected render() {
        return html`<p>text</p>`
    }

    createRenderRoot() {
        return this;
    }
}
