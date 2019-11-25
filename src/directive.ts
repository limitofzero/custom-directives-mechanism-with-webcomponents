export abstract class Directive {
    protected el: HTMLElement = null;

    constructor(el: HTMLElement) {
        if (!Directive.isHtmlElement(el)) {
            throw 'Element is not HTML node';
        }

        this.el = el;
    }

    private static isHtmlElement(el: any): boolean {
        return el && el instanceof HTMLElement;
    }
}
