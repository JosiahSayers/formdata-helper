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

  it('handles blobs', async () => {
    const formWithFile = new FormData();
    formWithFile.append('blob', new Blob(['blob', 'text']));
    formWithFile.append('multi-blob', new Blob(['first']));
    formWithFile.append('multi-blob', new Blob(['second']));
    const output = parseForm<{ blob: Blob, 'multi-blob': Blob[] }>(formWithFile);

    expect(output.blob).toBeDefined();
    expect(output.blob instanceof Blob).toBe(true);
    expect(await output.blob.text()).toBe('blobtext');
    expect(output["multi-blob"].length).toBe(2);
    expect(await output["multi-blob"][0].text()).toBe('first');
    expect(await output["multi-blob"][1].text()).toBe('second');
  });
});
