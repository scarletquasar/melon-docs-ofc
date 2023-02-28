---
sidebar_position: 2
---

# `Melon.std.fs.writeText(path, content)`

Writes all the text inside a file, will create a new file if it not exist.

Status: `stable` <br />
Returns: `Promise<void>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| content | `string` | The desired content of the file |

### Example usage

```ts
const { writeTextAsync } = Melon.fs;

await writeTextAsync("./hi.txt", "Hello");
```