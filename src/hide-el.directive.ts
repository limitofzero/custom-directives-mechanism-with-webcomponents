import {directive} from "./directive.decorator";
import {Directive} from "./directive";

@directive('[hideEl]')
class HideElDirective extends Directive {
    constructor(node: HTMLElement) {
        super(node);
        this.hideNode();
    }

    private hideNode() {
        this.el.style.display = 'none';
    }
}
