import { Request } from '@remix-run/node';
import { parseForm as baseParse } from 'base';

export const parseForm = <T = any>(request: Request): Promise<T> => {
  baseParse({});
  return Promise.resolve({} as T);
}
