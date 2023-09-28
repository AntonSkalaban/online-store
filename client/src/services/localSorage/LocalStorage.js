export class LocalStorage {
    static getArray(key) {
        const data = localStorage.getItem(key);
        if (!data)
            return [];
        return JSON.parse(data);
    }
    static setArray(key, arr) {
        localStorage.setItem(key, JSON.stringify(arr));
    }
}
