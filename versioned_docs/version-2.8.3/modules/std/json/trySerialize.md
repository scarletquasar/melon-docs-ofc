---
sidebar_position: 1
---

# `Melon.std.json.trySerialize(target)`

Tries to serialize an object.
Status: `stable` <br />
Returns: `Result<TError, TValue>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `any` | The target object to be serialized |

### Example usage

```ts
const { trySerialize } = Melon.std.json;

const result = tryDeserialize({a: 1, b: 2});
result.join();

result.match(_ => {}, console.log);
```

### Extra behaviors

-