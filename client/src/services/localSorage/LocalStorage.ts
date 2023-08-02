export class LocalStorage {
  static getArray<T>(key: string): T[] {
    const data = localStorage.getItem(key);
    if (!data) return [];

    return JSON.parse(data);
  }

  static setArray<T>(key: string, arr: T[]) {
    localStorage.setItem(key, JSON.stringify(arr));
  }
}
