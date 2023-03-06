---
sidebar_position: 5
---

# `Melon.http.static(responseBody, mimeType, responseHeaders?)`

Creates a result object with a static content, response body and headers to be used as result of a http application endpoint.

Status: `stable` <br />
Returns: `HttpResult`

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| responseBody | `any` | The result body |
| mimeType | `string` | MIME type of the body content |
| headers | `Record<string, any>?` | The result headers |

### Example usage

```ts
const { http } = Melon;
const html = () => http.static(200, "<a>Hello World!</a>", "text/html");
```