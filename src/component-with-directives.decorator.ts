import {customElement, LitElement} from "lit-element";

export const componentWithDirective = (selector: string, directiveSelectors: string[]) =>
    <T extends { new(...args: any[]): LitElement }>(clazz: T) => {
    const extendedClazz = class extends clazz {
        firstUpdated(changedProperties): void {
            // инициализация директив внутри shadow root компонента
            for (const directiveSelector of directiveSelectors) {
                const nodes = this.shadowRoot.querySelectorAll(directiveSelector);

                if (nodes.length) {
                    const dirConstructor = window.directives.get(directiveSelector);
                    for (const node of Array.from(nodes)) {
                        const el = node as HTMLElement;
                        const instance = new dirConstructor(el);
                    }
                }
            }

            super.firstUpdated(changedProperties);
        }
    };

    return customElement(selector)(extendedClazz);
};
