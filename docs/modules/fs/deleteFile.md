---
sidebar_position: 12
---

# `Melon.std.fs.deleteFile(path)`

Removes the specified file from the system.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |

### Example usage

```ts
const { deleteFile } = Melon.fs;
deleteFile("./hi.txt");
```