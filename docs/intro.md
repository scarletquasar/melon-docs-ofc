---
sidebar_position: 1
---

# Melon Runtime

Welcome to the official Melon Runtime wiki, here you can find updated information about the runtime like **installation**, **basic usage**, **project development** and **best pratices**. New suggestions can be made in the issues channel of that repository. Every information in that wiki reflects the last viable implementation.

> **Warning**
>
> This documentation is still in development. Some informations can be incorrect or not be fully covered, please create in the [main repository](https://github.com/MelonRuntime/Melon/issues) if you notice any problem.

## Getting Started

✨ **Information**

Currently, the latest Melon package works on top of **npm**, meaning that Melon can be easily executed in any environment with a simple `npm install` since node.js is also installed (or another compatible implementation of npm).

🎈 **Recommendations**

Before starting to learn **Melon**, we recommend basic knowledge about JavaScript (preferrable TypeScript) and about the .NET Environment (C#, F# or VisualBasic.NET)

💿 **Requirements**

In the list below, there are the required installations to run Melon locally
- [ASP.NET 6+](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Node.js](https://nodejs.org/en/)

🚀 **Installing**

Melon can easily be installed with the command below:
```
npm install melon-runtime -g
```

💻 **Getting help**

Use the flag `--ignore-update` to ignore the update checker and boost the cold start time. <br /
Use `melon --help` or `melon [command] --help` to get specific help about Melon usage.

## Commands

| Name | Description |
| ------------- | -------------------------------------- |
| load [string] | Loads a module and start the execution |
| run  [string] | Executes a script directly |
| new  [str?] [str?] | Create a Melon new project |