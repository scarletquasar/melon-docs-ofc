---
sidebar_position: 3
---

# `Melon.std.json.tryParse<T>(target)`

Tries to parse an string into a `T` type variable.
Status: `stable` <br />
Returns: `T`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `string` | The target object to be serialized |

### Example usage

```ts
const { tryParse } = Melon.std.json;

interface User {
    name: string;
    surname: string;
}

const userJson = `{name: "John", surname: "Doe"}`;
const result = tryParse<User>(userJson);

console.log(result);
```

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Passing an invalid JSON as argument | An invalid empty object will be returned (`{}`) | Consider using `Melon.std.json.tryDeserialize` or be sure that no invalid JSON will be passed as argument |