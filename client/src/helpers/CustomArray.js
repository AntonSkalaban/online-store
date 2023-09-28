export class CustomArray {
    static create(length, from) {
        return Array.from({ length: length }, (_, i) => i + from);
    }
    static removeDublicateObjects(arr, uniqKey) {
        const uniqObjects = [];
        const uniqKeys = [];
        arr.forEach((obj) => {
            if (!uniqKeys.includes(obj[uniqKey])) {
                uniqKeys.push(obj[uniqKey]);
                uniqObjects.push(obj);
            }
        });
        return uniqObjects;
    }
    static removeDublicateKeys(arr, uniqKey) {
        const keysArr = arr.map((key) => key[uniqKey]);
        return [...new Set(keysArr)];
    }
}
