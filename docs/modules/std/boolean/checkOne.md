---
sidebar_position: 1
---

# `Melon.std.boolean.checkOne(method, values)`

Check the `true` condition in a method for at least **one** value.

Status: `stable` <br />
Returns: `boolean`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| method | `Function` | The function to be executed with the values in order to get the conditional value |
| values | `any[]` | Values to be checked with the method |

### Example usage

```ts
const { boolean } = Melon.std;

const result = boolean.checkOne(Number.isInteger, [1, 2, 3, 4]);
console.log(result);
```

### Extra behaviors

-