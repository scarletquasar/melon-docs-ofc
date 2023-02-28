---
sidebar_position: 3
---

# `console.warn(...data)`

Calls the `console.log` function using a [`Yellow` color from the internal CLR library](https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor).

Status: `unstable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | `...any` | The data to be displayed on the screen |

### Example usage

```ts
console.error("a", "b", "c");
```

### Extra behaviors

- **All `console.log` extra behaviors**