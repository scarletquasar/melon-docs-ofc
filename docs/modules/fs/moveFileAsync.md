---
sidebar_position: 18
---

# `Melon.std.fs.moveFileAsync(path)`

Moves the specified file to the specified target.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path |

### Example usage

```ts
const { moveFileAsync } = Melon.fs;
await moveFileAsync("./hi.text", "./myDirectory/hi.txt");
```