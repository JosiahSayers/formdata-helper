import { parseForm as baseParse } from '@formdata-helper/base';

export const parseForm = async <T = any>(request: { formData: () => Promise<FormData> }): Promise<T> => {
  const formData = await request.formData();
  return baseParse<T>(formData);
}
