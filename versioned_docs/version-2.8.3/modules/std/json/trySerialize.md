---
sidebar_position: 1
---

# `Melon.std.json.trySerialize()`

Creates a callback chain that will execute one or more callbacks based in a condition that is related to the initial specified value.

Status: `stable` <br />
Returns: `typeof(shift) | void`

### Parameters

*Valid calling `shift().option(...)`*

| Name | Type | Description |
| ---- | ---- | ----------- |
| condition | `boolean` | The condition to be analyzed in order to execute the action |
| action | `Function` | Action meant to be executed if `condition` is `true` |
| finishOnTrue | `boolean?` | The condition to finish the chain if the last `condition` is true |

### Example usage

```ts
shift()
  .option(a === 1, () => console.log(1))
  .option(a === 2, () => console.log(2))
  .option(a === 3, () => console.log(2), true);
```

### Extra behaviors

-