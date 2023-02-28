---
sidebar_position: 2
---

# `TextDecoder (class)`

The built-in TextDecoder object allows one to read the value into an actual JavaScript string, given the buffer.

Status: `unstable` <br />

### Constructor Parameters

-

### Example usage

```ts
const decoder = new TextDecoder();
```

### Extra behaviors

-

## Instance Methods

### `TextDecoder.decode(octets)`

Status: `unstable` <br />
Returns: `string`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| octets | `number[]` | The octets to be decoded into a `string` |

#### Example usage

```ts
const encoder = new TextEncoder();
const octets = encoder.encode("Hello World");

const decoder = new TextDecoder();
const decoded = decoder.decode(octets);
```

#### Extra behaviors

-