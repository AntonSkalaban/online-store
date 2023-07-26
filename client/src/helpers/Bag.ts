import { BagItem } from '../types';
import { LocalStorage } from './LocalStorage';

export class Bag {
  static add(id: string) {
    const products = LocalStorage.getArray<BagItem>('bag');
    const productIds = products.map((product) => product.id);

    const index = productIds.indexOf(+id);

    if (index === -1) {
      products.unshift({ id: +id, quantity: 1 });
    } else products[index].quantity++;

    LocalStorage.setArray('bag', products);
  }

  static get(): BagItem[] {
    return LocalStorage.getArray('bag');
  }
}
