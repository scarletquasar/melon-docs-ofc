---
sidebar_position: 10
---

# `Melon.std.fs.readBytesAsync(path)`

Reads a file bytes content and returns it as string.

Status: `stable` <br />
Returns: `Promise<number[]>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { readBytesAsync } = Melon.fs;
const myContent = await readBytesAsync("./hi.txt");
```