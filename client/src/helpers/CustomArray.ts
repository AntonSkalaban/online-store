import { Product } from '../types';

export class CustomArray {
  static removeDublicateObjects(arr: Product[]) {
    const unicObjects = [] as Product[];
    const unicIds = [] as string[];
    arr.forEach((obj) => {
      if (!unicIds.includes(obj._id)) {
        unicIds.push(obj._id);
        unicObjects.push(obj);
      }
    });
    return unicObjects;
  }
}
