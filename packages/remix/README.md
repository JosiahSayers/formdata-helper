# @formdata-helper/remix

Easy functions for converting formdata instances to an object.

**Why would I use this instead of passing my `FormData` instance to `Object.fromEntries`?**

There are two big things that `Object.fromEntries` does not handle. The biggest issue is forms with multiple values under the same key. Creating an object with `Object.fromEntries` will only grab the last value assigned to this key, even though `FormData` is storing multiple values for this key. Second, `@formdata-helper/base` allows for easily assigning a type to the parsed object.

## Usage
Use your package manager to install `@formdata-helper/remix`. This package is meant to be used in a [remix](https://remix.run) app. If you're looking for a library that can be used in the browser check out [@formdata-helper/base](https://www.npmjs.com/package/@formdata-helper/base)

### @formdata-helper/remix

```typescript
import { parseForm } from "@formdata-helper/remix"

export const action: ActionFunction = async ({ request }) => {
  // Form has 3 inputs
  // <input name="single" value="foo">
  // <input name="multiple" value="bar">
  // <input name="multiple" value="baz">
  const asObject = await parseForm(request);
  console.log(asObject);
  // Output: { single: 'foo', multiple: ['bar', 'baz'] }
}
```

## Typescript
@formdata-helper fully supports typescript. All functions are shipped with type definitions. You can also define the type of form you are parsing.

```typescript
import { parseForm } from "@formdata-helper/base"

type Form = {
  single: string;
  multiple: string[];
}

const formdataInstance = new FormData();
formdataInstance.append('single', 'foo');
formdataInstance.append('multiple', 'bar');
formdataInstance.append('multiple', 'baz');
const asObject = parseForm<Form>(formdataInstance);
```
It may be helpful to use typescript helpers alter the properties to nullable until you validate the fields were filled out correctly.
