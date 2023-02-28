---
sidebar_position: 1
---

# `Melon.std.fs.write(path, content)`

Writes all the text inside a file, will create a new file if it not exist.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| path | `string` | The target path to the file |
| content | `string` | The desired content of the file |

### Example usage

```ts
const { writeText } = Melon.fs;

writeText("./hi.txt", "Hello");
```