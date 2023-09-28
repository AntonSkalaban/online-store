export class PageURL {
    static create(params) {
        const newUrl = window.location.origin + window.location.pathname + (params ? '?' + params : '');
        return newUrl;
    }
    static update(params) {
        const url = PageURL.create(params);
        history.pushState({}, '', url);
    }
}
