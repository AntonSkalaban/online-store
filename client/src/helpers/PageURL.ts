import { GlobalFilterValues } from 'store/slice';
import { CustomObject } from './CustomObject';

export class PageURL {
  static create(params: string) {
    const newUrl = window.location.origin + window.location.pathname + (params ? '?' + params : '');
    return newUrl;
  }

  static update(params: string) {
    const url = PageURL.create(params);
    history.pushState({}, '', url);
  }

  static showNewUrl(globalFilterValues: GlobalFilterValues) {
    const existGlobalValues = CustomObject.removeEmptyField(globalFilterValues);
    const newUrlParams = new URLSearchParams(existGlobalValues as Record<string, string>);

    PageURL.update(newUrlParams.toString());
  }
}
