import { Product } from '../types/types';

export class CustomArray {
  static create(length: number, from: number) {
    return Array.from({ length: length }, (_, i) => i + from);
  }

  static removeDublicateObjects(arr: Product[], uniqKey: keyof Product) {
    const uniqObjects = [] as Product[];
    const uniqKeys = [] as (string | number | string[])[];

    arr.forEach((obj) => {
      if (!uniqKeys.includes(obj[uniqKey])) {
        uniqKeys.push(obj[uniqKey]);
        uniqObjects.push(obj);
      }
    });
    return uniqObjects;
  }

  static removeDublicateKeys<T>(arr: T[], uniqKey: keyof T): string[] {
    const keysArr = arr.map((key) => key[uniqKey]);

    return [...new Set(keysArr)] as string[];
  }
}
