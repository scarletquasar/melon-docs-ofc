---
sidebar_position: 8
---

# `Melon.std.fs.readTextAsync(path)`

Readss a file text content and returns it as string.

Status: `stable` <br />
Returns: `Promise<string>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { readTextAsync } = Melon.fs;
const myContent = await readTextAsync("./hi.txt");
```