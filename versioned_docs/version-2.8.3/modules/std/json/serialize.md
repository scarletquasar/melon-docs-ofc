---
sidebar_position: 5
---

# `Melon.std.json.serialize(target)`

Serialize an object directly into an string.
Status: `unstable` <br />
Returns: `string`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| target | `any` | The target object to be serialized |

### Example usage

```ts
const { serialize } = Melon.std.json;

const user = {name: "John", surname: "Doe"};
const result = serialize(user);

console.log(result);
```

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| There is no error handling | An invalid string will be returned (`""`) | Consider using `Melon.std.json.trySerialize` or be sure that no invalid target will be passed as argument |