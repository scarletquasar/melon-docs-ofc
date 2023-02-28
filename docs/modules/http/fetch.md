---
sidebar_position: 1
---

# `Melon.http.fetch(resource, options)`

Starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

Status: `stable` <br />
Returns: `Promise<Response>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| resource | `string` | The target resource to be fetched |
| options | `Record<string, any>` | Options object to populate the method |

### Example usage

```ts
const result = await fetch("resource").json();
```