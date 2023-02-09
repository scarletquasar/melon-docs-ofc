---
sidebar_position: 2
---

# `Melon.std.json.tryDeserialize<T>(target)`

Tries to deserialize an string into an object of the type `T`.
Status: `stable` <br />
Returns: `Result<TError, TValue>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `string` | The target object to be serialized |

### Example usage

```ts
const { tryDeserialize } = Melon.std.json;

interface User {
    name: string;
    surname: string;
}

const userJson = `{name: "John", surname: "Doe"}`;
const result = tryDeserialize<User>(userJson);
result.join();

result.match(_ => {}, console.log);
```

### Extra behaviors

-