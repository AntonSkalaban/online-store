import { LocalStorage } from './LocalStorage';

export class ResentlyViewed {
  static save(id: string) {
    const limit = 12;
    const productIds = LocalStorage.getArray<string>('recentlyViewed');

    const index = productIds.indexOf(id);

    if (index === -1) {
      productIds.unshift(id);
      if (productIds.length > limit) productIds.pop();
    } else {
      productIds.splice(index, 1);
      productIds.unshift(id);
    }

    LocalStorage.setArray('recentlyViewed', productIds);
  }

  static get(): number[] {
    return LocalStorage.getArray<number>('recentlyViewed');
  }
}
