import { Request } from "@remix-run/node";
import { parseForm } from "./parseForm";

describe('parseForm', () => {
  const testForm = new FormData();
  testForm.append('single', 'hello');
  testForm.append('multiple', 'hello1');
  testForm.append('multiple', 'hello2');
  const testRequest = new Request(new URL('http://localhost'), { body: testForm, method: 'post' });

  it('correctly parses the form data into an object', async () => {
    expect(await parseForm(testRequest)).toEqual({
      single: 'hello',
      multiple: ['hello1', 'hello2'],
    });
  });
});
