import { LitElement } from 'lit';

export class PageViewElement extends LitElement {

    shouldUpdate() {
        return this.active;
    }

    static get properties() {
        return {
        active: { type: Boolean }
        }
    }
}