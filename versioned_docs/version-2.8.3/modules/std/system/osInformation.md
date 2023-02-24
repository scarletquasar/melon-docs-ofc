---
sidebar_position: 1
---

# `Melon.std.system.osInformation`

Contains the current OS information.

Status: `stable` <br />
Type: `OSInformation`

## Types

<table>
    <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                Schema
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 


`OSInformation`
</td>
<td>

```ts
interface OSInformation {
  platform: Platform;
  versionString: string;
  servicePack?: string;
}
```
</td>
</tr>
<tr>
            <td> 


`Platform`
</td>
<td>

```ts
enum Platform {
    Win32S,
    Win32Windows,
    Win32NT,
    WinCE,
    Unix,
    Xbox,
    MacOSX,
    Other
}
```
</td>
</tr>
</tbody></table>

## Example usage

```ts
const { platform } = Melon.std.system.osInformation;

if (platform === Platform.Unix) {
  //execute Linux/Unix only logic...
}
```