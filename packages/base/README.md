# @formdata-helper/base

Easy functions for converting formdata instances to an object.

**Why would I use this instead of passing my `FormData` instance to `Object.fromEntries`?**

There are two big things that `Object.fromEntries` does not handle. The biggest issue is forms with multiple values under the same key. Creating an object with `Object.fromEntries` will only grab the last value assigned to this key, even though `FormData` is storing multiple values for this key. Second, `@formdata-helper/base` allows for easily assigning a type to the parsed object.

## Usage
Use your package manager to install either `@formdata-helper/base`. The base library can be used in browser environments and is what powers all other libraries.

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
