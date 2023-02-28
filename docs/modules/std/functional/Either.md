---
sidebar_position: 1
---

# `Either<TLeft, TRight> (class)`

Either represents values with two possibilities: TLeft value of type Either TLeft/TRight is either Left TLeft or Right TRight.

Status: `stable` <br />

### Factory Methods

### `Either.left<T>(value)`

Creates a left Either instance with the left value filled.

Status: `stable` <br />
Returns: `Either<T, unknown>`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | `T` | The value to fill the left slot |

#### Example usage

```ts
const { Either } = Melon.std.functional;

const myValue: Either<string, number> = condition 
    ? Either.left("Hello") : Either.right(100);
```

### `Either.right<T>(value)`

Creates a right Either instance with the right value filled.

Status: `stable` <br />
Returns: `Either<unknown, T>`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | `T` | The value to fill the left slot |

#### Example usage

```ts
const { Either } = Melon.std.functional;

const myValue: Either<string, number> = condition 
    ? Either.left("Hello") : Either.right(100);
```

## Instance Methods

### `Either.fold<T>(actionLeft, actionRight)`

Create an a pattern-matching based operation chain to the `Either` values.

Status: `stable` <br />
Returns: `T`

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| actionLeft | `Function` | The operation to be called in case of the left value not being `null` |
| actionRight | `Function` | The operation to be called in case of the right value not being `null` |

#### Example usage

```ts
const { Either } = Melon.std.functional;

const myValue: Either<string, number> = condition 
    ? Either.left("Hello") : Either.right(100);

const myDerivedValue = myValue.fold<string[]>(
    left => left.split(), 
    right => right.toString().split()
);
```