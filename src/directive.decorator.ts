export const directive = (selector: string) => (constructor: Function) => {
    window.directives.set(selector, constructor);
};
