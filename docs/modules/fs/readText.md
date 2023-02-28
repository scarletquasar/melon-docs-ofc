---
sidebar_position: 7
---

# `Melon.std.fs.readText(path)`

Readss a file text content and returns it as string.

Status: `stable` <br />
Returns: `string`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { readText } = Melon.fs;
const myContent = readText("./hi.txt");
```