class CustomObject {
    static removeEmptyField(obj) {
        const clone = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(obj).filter(([_, value]) => (value && value?.length) || value > 0));
        return clone;
    }
    static resetAllFields = (obj) => {
        const clone = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(obj).map(([key, _]) => {
            if (Array.isArray(obj[key])) {
                return [key, []];
            }
            return [key, ''];
        }));
        return clone;
    };
}
export { CustomObject };
