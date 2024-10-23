# Frontend Exercise

## Overview
This is a VERY basic ReactJS application that is uses the WebApi backend (https://github.com/aoreillydemo/keypath-webapi) that is capable of taking a search/filter string and returning a grid of submitted records matching the criteria.

## Technologies
- ReactJS (was very close to using Next.JS)
- Vite
- Axios (for webapi)
- Material-UI (for UI components)
- Azure Static WebApps

## Additional Information
- Was developed using Visual Studio Code

A working examaple can be viewed here - https://keypathspa-axahbebdh7c9c5g2.australiaeast-01.azurewebsites.net/
!!! Please note this may be slow (take a moment to begin working) due to free service tiers warming up

## Limitations
There are many limitation due to specific time contraints that should be noted
 - There are no tests (would typically use and implement automated UI tests)
 - I experience issues deploying to Azure Static WebApps (believe this may have to do with free subscription limitations) so has been deployed as a static app in Azure App Services
 - Would typically create Azure services using infrustructure as code (bicep) and configure CI/CD
 - Wasn't able to complete paging in the specified time
