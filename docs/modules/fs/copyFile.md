---
sidebar_position: 15
---

# `Melon.std.fs.copyFile(path)`

Copy the specified file to the specified target.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path |

### Example usage

```ts
const { copyFile } = Melon.fs;
copyFile("./hi.text", "./myDirectory/hi.txt");
```