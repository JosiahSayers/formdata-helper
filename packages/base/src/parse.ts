export const parseForm = <T = any>(formData: FormData): T => {
  const mapped = Array.from(formData.keys()).reduce((output, key) => {
    const value = formData.getAll(key);
    output[key] = value.length === 1 ? value[0] : value;
    return output;
  }, {} as any);
  return mapped as unknown as T;
};
