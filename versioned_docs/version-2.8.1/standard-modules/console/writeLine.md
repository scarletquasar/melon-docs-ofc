---
sidebar_position: 6
---

# `console.writeLine(object, color?)`

Writes the target object with the respective [console color](https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor?view=net-6.0) and one extra line.

Status: `unstable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| object | `any` | The object to be displayed on the screen |
| color | [`ConsoleColor`](https://learn.microsoft.com/en-us/dotnet/api/system.consolecolor?view=net-6.0) | The output color |

### Example usage

```ts
console.writeLine("Hello World!");
console.writeLine("Hello World!", "Magenta");
```

### Extra behaviors

- **All `console.log` extra behaviors**