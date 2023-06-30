import { LocalStorage } from './LocalStorage';

export class ResentlyViewed {
  static save(id: string) {
    const productIds = LocalStorage.getArray('recentlyViewed');

    const index = productIds.indexOf(id);

    if (index === -1) {
      productIds.unshift(id);
      if (productIds.length > 15) productIds.pop();
    } else {
      productIds.splice(index, 1);
      productIds.unshift(id);
    }

    localStorage.setItem('recentlyViewed', JSON.stringify(productIds));
  }

  static get(): number[] | [] {
    return LocalStorage.getArray('recentlyViewed');
  }
}
