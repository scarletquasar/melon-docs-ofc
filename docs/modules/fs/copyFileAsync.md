---
sidebar_position: 16
---

# `Melon.std.fs.copyFileAsync(path)`

Copy the specified file to the specified target.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path |

### Example usage

```ts
const { copyFileAsync } = Melon.fs;
await copyFileAsync("./hi.text", "./myDirectory/hi.txt");
```