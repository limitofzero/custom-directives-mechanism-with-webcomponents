import {customElement, LitElement, property, html, css} from "lit-element";
import {Error} from "./error.interface";
import {errors} from "./errors";
import {componentWithDirective} from "./component-with-directives.decorator";

@componentWithDirective('errors-list', [])
export class ErrorsListComponent extends LitElement {
    @property()
    public errors: Error[] = errors;

    private getErrors() {
        return this.errors.map(error => html`<li class="error">${error.message}</li>`)
    }

    public static get styles() {
        return css`
            .error-list {
                list-style: none;
                background: indianred;
                text-align: left;
                padding: 0;
            }

            .error {
                color: white;
                padding: 10px;
            }
        `;
    }

    protected render() {
        return this.errors.length ?
            html`<ul class="error-list">${this.getErrors()}</ul>` :
            null;
    }

    connectedCallback(): void {
        console.log('element connected callabck');
        super.connectedCallback();
    }
}
