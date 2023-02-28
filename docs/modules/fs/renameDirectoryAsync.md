---
sidebar_position: 20
---

# `Melon.std.fs.renameDirectoryAsync(path, newName)`

Renames the target directory.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target directory path |
| newName | `string` | The new name |

### Example usage

```ts
const { renameDirectoryAsync } = Melon.fs;
await renameDirectoryAsync("./myDirectory", "documents");
```