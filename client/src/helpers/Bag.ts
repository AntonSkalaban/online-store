import { LocalStorage } from './LocalStorage';

export class Bag {
  static save(id: string) {
    const productIds = LocalStorage.getArray('bag');

    const index = productIds.indexOf(id);

    if (index === -1) {
      productIds.unshift({ id: id, quantity: 1 });
    } else {
      const product = productIds.splice(index, 1);
      product.quantity++;
      productIds.unshift(product);
    }

    localStorage.setItem('bag', JSON.stringify(productIds));
  }

  static get(): { id: string; quantity: number }[] | [] {
    return LocalStorage.getArray('bag');
  }
}
