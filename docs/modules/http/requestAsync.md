---
sidebar_position: 3
---

# `Melon.http.requestAsync(resource, method, body, headers)`

Requests an external resource.

Status: `stable` <br />
Returns: `Promise<Response>`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| resource | `string` | The target resource to be fetched |
| method | `string` | The operation http method |
| body | `Record<string, any>` | The body to be sent in the request |
| headers | `Record<string, any>` | The headers to be sent in the request |

### Example usage

```ts
const { requestAsync } = Melon.http; 

const result = await requestAsync("resource");
```