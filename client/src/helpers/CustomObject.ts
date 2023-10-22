import { FormFilterValues } from '../store/slice';

export class CustomObject {
  static removeEmptyField(obj: FormFilterValues) {
    const clone = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(obj).filter(([_, value]) => (value && value?.length) || value > 0)
    );
    return clone;
  }

  static resetAllFields = (obj: FormFilterValues, exceptFields?: string[]): FormFilterValues => {
    const newObj = Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (exceptFields?.includes(key)) return [key, value];
        if (Array.isArray(obj[key as keyof FormFilterValues])) {
          return [key, []];
        }
        if (typeof obj[key as keyof FormFilterValues] === 'number') {
          return [key, 0];
        }
        return [key, ''];
      })
    );
    return newObj;
  };
}
