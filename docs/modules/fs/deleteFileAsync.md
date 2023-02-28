---
sidebar_position: 13
---

# `Melon.std.fs.deleteFileAsync(path)`

Removes the specified file from the system.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { deleteFileAsync } = Melon.fs;
await deleteFileAsync("./hi.txt");
```