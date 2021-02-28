# Sanity Content Studio

Sanity docs to work with the Studio: https://www.sanity.io/docs

## Developing with Sanity

**Note:** You only need to get Sanity running locally if you need to make changes to the Sanity schema. Otherwise you should use the hosted version of the Sanity backend for content management.

```
# install the Sanity CLI if you don’t have it already
npm i -g @sanity/cli

# install sanity into the project
sanity install

# start the studio
sanity start

# deploy the studio 
sanity deploy

# deploy the graphql api
sanity graphql deploy
```
