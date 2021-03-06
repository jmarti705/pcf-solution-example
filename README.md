# power platform PCF controls

## Summary
The purpose of solution is to show how to leverage custom code in Power Platform via Canvas or Model Driven apps using the Power Platform Component Framework (PCF).

This sample solution consists of 2 PCF controls:
    -TypeScript component using MSAL authentication libray example
    -React component using Fluent UI button example


## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.13-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

>   Microsoft Power Platform CLI (https://docs.microsoft.com/en-us/power-apps/developer/data-platform/powerapps-cli)
>   Developer Command Prompt for VS 2017 or higher (https://docs.microsoft.com/en-us/visualstudio/ide/reference/command-prompt-powershell)
>   Node.js (https://nodejs.org/)



## Solution

Solution|Author(s)
--------|---------
folder name | Author details (name, company, twitter alias with link)

## Version history

Version|Date|Comments
-------|----|--------
1.0|January 29, 2021|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- modify the config.ts file for SampleComp
  - naviagte to ..\solution\SampleComp\SampleComp\config.ts 
    - add your azure function settings: 
    - **clientId: "Enter_the_Application_Id_Here",**
      **authority: "Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here",**
      **redirectUri: "Enter_the_Redirect_Uri_Here",**

- in the terminal/command-line 
  - cd to ..\solution\MyReactComponent 
    - run: 
    - **npm install**
    - cd to ..\solution\SampleComp 
    - run: 
    - **npm install**

- in the Developer Command Prompt:
  - cd to ..\solution
    - run:
    - **msbuild /t:build /restore**


- go to your Platform Enviornment to upload package solution: (https://docs.microsoft.com/en-us/power-apps/maker/data-platform/import-update-export-solutions)
- navigate to 'Solutions' and select 'Import'
  - using file explorer:
  - navigate to ..\solution\bin\Debug
    - locate zip file:
    - **solution.zip**

- go to your Platform Enviornment to add Component to Canvas app: (https://docs.microsoft.com/en-us/power-apps/developer/component-framework/component-framework-for-canvas-apps)
- navigate to 'Code Component'
  - select 'Get more components'
    - under code select:
    - **SampleComp**
    - **MyReactComponent**

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- topic 1
- topic 2
- topic 3

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
