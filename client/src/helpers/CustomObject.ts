import { FormFilterValues } from '../store/slice';

export class CustomObject {
  static removeEmptyField(obj: FormFilterValues) {
    const clone = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(obj).filter(([_, value]) => value && value?.length)
    );
    return clone;
  }

  static resetAllFields = (obj: FormFilterValues): FormFilterValues => {
    const clone = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(obj).map(([key, _]) => {
        if (Array.isArray(obj[key as keyof FormFilterValues])) {
          return [key, []];
        }
        return [key, ''];
      })
    );
    return clone;
  };
}
