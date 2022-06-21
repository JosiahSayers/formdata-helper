export const createForm = (input: Record<string, unknown>): FormData => {
  const output = new FormData();
  Object.entries(input).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(val => output.append(key, prepValue(val)));
    } else {
      output.append(key, prepValue(value));
    }
  });
  return output;
};

const prepValue = (value: any): Blob | string => {
  if (Array.isArray(value)) {
    throw new Error('nested arrays are not supported');
  }

  if (typeof value === "object") {
    throw new Error('nested objects are not supported');
  }

  return value instanceof Blob ? value : `${value}`;
}
