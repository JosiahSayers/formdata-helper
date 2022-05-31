import { parseForm } from "./parse";

describe('parseForm', () => {
  const testForm = new FormData();
  testForm.append('single', 'hello');
  testForm.append('multiple', 'hello1');
  testForm.append('multiple', 'hello2');

  it('correctly parses the form data into an object', () => {
    expect(parseForm(testForm)).toEqual({
      single: 'hello',
      multiple: ['hello1', 'hello2'],
    });
  });
});
