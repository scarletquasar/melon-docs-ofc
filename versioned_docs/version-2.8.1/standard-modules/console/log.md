---
sidebar_position: 1
---

# `console.log(...data)`

Shows the passed data as formatted representations on the screen. Data arguments will be separated by line breaks.

Status: `unstable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | `...any` | The data to be displayed on the screen |

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Passing a `function` or `Error` object as argument | An internal `TargetInvocationException` will be thrown and the method will not proceed to the next arguments | Call the function with `[object].toString()` instead of passing directly |
| Passing common instance objects as arguments (like `Promise`, `Set` or `Map`)  | The output will be `{}` | Try converting the instance values to an object or getting the values to be shown directly |
| Trying to visualize object methods with `console.log` | Currently, `console.log` can't reproduce a map of the internal methods of an object | To visualize the method itself try referencing it directly |
| Passing **interoperability** methods from the internal .NET CLR  | The output will be `function () { [native code] }` | There is no workaround since .NET methods are not supposed to be stringified/shown by `console.log` |