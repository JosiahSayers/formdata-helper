import { Request } from '@remix-run/node';
import { parseForm as baseParse } from 'base';

export const parseForm = async <T = any>(request: Request): Promise<T> => {
  const formData = await request.formData();
  return baseParse<T>(formData);
}
