---
sidebar_position: 3
---

# `TextEncoder (class)`

The built-in TextEncoder object allows one to read the value into an actual an arrat od octets, given the target string.

Status: `unstable` <br />

### Constructor Parameters

-

### Example usage

```ts
const encoder = new TextEncoder();
```

### Extra behaviors

-

## Instance Methods

### `TextEncoder.encode(string)`

Status: `unstable` <br />
Returns: `number[]`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| string | `string` | The string to be encoded into a `number[]` |

#### Example usage

```ts
const encoder = new TextEncoder();
const octets = encoder.encode("Hello World");
```

#### Extra behaviors

-