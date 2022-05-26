export const parseForm = <T = any>(formData: FormData): T => {
  const mapped = Array.from(formData.keys()).map(key => {
    const value = formData.getAll(key);
    return value.length === 1 ? value[0] : value;
  });
  return mapped as unknown as T;
};
