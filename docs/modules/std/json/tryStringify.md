---
sidebar_position: 4
---

# `Melon.std.json.tryStringify<T>(target)`

Tries to stringify any variable.
Status: `stable` <br />
Returns: `string`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `any` | The target object to be serialized |

### Example usage

```ts
const { tryStringify } = Melon.std.json;

const user = {name: "John", surname: "Doe"};
const result = tryStringify(user);

console.log(result);
```

### Extra behaviors

-