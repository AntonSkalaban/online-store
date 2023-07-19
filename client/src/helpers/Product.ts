import { Bag } from './Bag';
import { LocalStorage } from './LocalStorage';
import { ResentlyViewed } from './ResentlyViewed';

export class Product {
  static addToResentlyViewed(id: string) {
    ResentlyViewed.save(id);
  }

  static addToBag(id: string) {
    Bag.add(id);
  }

  static getFrom(path: string): number[] | [] {
    return LocalStorage.getArray(path);
  }
}
