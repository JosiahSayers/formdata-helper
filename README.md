# @formdata-helper

Easy functions for converting formdata instances to an object.

## Usage
Use your package manager to install either `@formdata-helper/base` or `@formdata-helper/remix`. The base library can be used in browser environments and is what powers all other libraries. The Remix library can be used in a [remix](https://remix.run) app.

### @formdata-helper/base

```javascript
import { parseForm } from "@formdata-helper/base"

const formdataInstance = new FormData();
formdataInstance.append('single', 'foo');
formdataInstance.append('multiple', 'bar');
formdataInstance.append('multiple', 'baz');
const asObject = parseForm(formdataInstance);
console.log(asObject);
// Output: { single: 'foo', multiple: ['bar', 'baz'] }
```

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
