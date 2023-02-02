---
sidebar_position: 7
---

# `console.time(label)`

Starts a timer that can be managed by the current label.

Status: `stable` <br />
Returns: `void`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| label | `string` | Identifier label for the timer |

### Example usage

```ts
console.time("test");
```

### Extra behaviors

| Condition | Consequence | Workaround |
| --------- | ----------- | ---------- |
| Call `console.time` two or more times with the same label | The timer will be restarted | Prefer using different labels to different measurements |