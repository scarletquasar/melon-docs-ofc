---
sidebar_position: 6
---

# `Melon.std.json.deserialize<T>(target)`

Deserializes a string into an object of type `T`.
Status: `unstable` <br />
Returns: `T`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `string` | The target object to be deserialized |

### Example usage

```ts
const { deserialize } = Melon.std.json;

interface User {
    name: string;
    surname: string;
}

const userJson = `{name: "John", surname: "Doe"}`;
const result = deserialize<User>(userJson);

console.log(result);
```

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| There is no error handling | An invalid empty object will be returned (`{}`) | Consider using `Melon.std.json.tryDeserialize` or be sure that no invalid JSON will be passed as argument |