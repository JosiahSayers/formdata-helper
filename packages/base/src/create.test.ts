import { createForm } from ".";

describe('createForm', () => {
  const testObject = {
    single: 'hello',
    multiple: ['hello1', 'hello2']
  };

  it('correctly creates a FormData instance from the input object', () => {
    const output = createForm(testObject);
    expect(output.get('single')).toBe('hello');
    expect(output.getAll('multiple')).toEqual(['hello1', 'hello2']);
  });

  it('throws an error when trying to parse nested arrays', () => {
    expect(() => createForm({ nested: [['test']] })).toThrowError('nested arrays are not supported');
  });

  it('throws an error when trying to parse nested objects', () => {
    expect(() => createForm({ nestedObject: { test: 'test' } })).toThrowError('nested objects are not supported');
  });
});
