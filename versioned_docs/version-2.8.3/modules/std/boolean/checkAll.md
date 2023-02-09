---
sidebar_position: 1
---

# `Melon.std.boolean.checkAll(method, values)`

Check the `true` condition in a method for **all** the values.

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

const result = boolean.checkAll(Number.isInteger, [1, 2, 3, 4]);
console.log(result);
```

### Extra behaviors

-