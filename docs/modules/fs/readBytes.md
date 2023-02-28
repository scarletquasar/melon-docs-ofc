---
sidebar_position: 9
---

# `Melon.std.fs.readBytes(path)`

Readss a file bytes content and returns it as string.

Status: `stable` <br />
Returns: `number[]`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { readBytes } = Melon.fs;
const myContent = readBytes("./hi.txt");
```