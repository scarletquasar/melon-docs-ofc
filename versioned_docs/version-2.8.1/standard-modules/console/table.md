---
sidebar_position: 4
---

# `console.table(tabularData)`

Clear the entire console screen.

Status: `unstable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tabularData | `any` | The data to be displayed on the screen (tabular data will be better displayed) |

### Example usage

```ts
console.table([{a: 1}, {a: 2}, {a: 3}]);
```

### Extra behaviors

- **All `console.log` extra behaviors**

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| ⛔ Method console.table not displaying the data correctly and throwing error | Entire method not working properly | See issue [#252](https://github.com/MelonRuntime/Melon/issues/252) |
| Passing non-tabular data as argument | The data will be displayed normally as `console.log` does | - |