---
sidebar_position: 6
---

# `Melon.std.fs.renameFileAsync(path, newName)`

Renames a file to the new desired name.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| newName | `string` | The new desired name |

### Example usage

```ts
const { renameFileAsync } = Melon.fs;

await renameFileAsync("./hi.txt", "./hello.txt");
```