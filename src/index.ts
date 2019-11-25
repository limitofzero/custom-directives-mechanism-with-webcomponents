import './factories';
import './errors-list.component';
import './t.component';
import './hide-el.directive';

// инициализация директив на верхнем уровне
window.addEventListener('DOMContentLoaded', () => {

    for (const pair of window.directives) {
        const [selector, constructor] = pair;
        const nodes = document.querySelectorAll(selector);

        for (const node of Array.from(nodes)) {
            const el = node as HTMLElement;
            const instance = new constructor(el);
        }
    }
});
