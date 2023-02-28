---
sidebar_position: 2
---

# `Melon.http.request(resource, method, body, headers)`

Requests an external resource.

Status: `stable` <br />
Returns: `Response`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| resource | `string` | The target resource to be fetched |
| method | `string` | The operation http method |
| body | `Record<string, any>` | The body to be sent in the request |
| headers | `Record<string, any>` | The headers to be sent in the request |

### Example usage

```ts
const { request } = Melon.http; 

const result = request("resource");
```