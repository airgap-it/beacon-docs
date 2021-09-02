# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# Adding a new dApp to the list

To add a new dApp to [this list](https://docs.walletbeacon.io/dapps), you have to add a new entry to `src/data/dapps.json`. At the end of the file, add the following object:

```
    {
      "key": "bunnyknights", // A unique identifier of this dApp, can be anything
      "name": "bunnyknights", // The name of the dApp
      "url": "https://www.bunnyknights.com", // The index page of the dApp
      "checkUrl": "https://www.bunnyknights.com", // The page where the SDK version can be checked
      "sourceCode": null, // Link to the source code, if available
      "inactive": false, // Indicate whether or not this dApp is under active development
      "usingCustomUI": false, // Whether or not this dApp is using custom UI
      "sdkVersion": "0", // This will be filled in automatically
      "lastUpdate": 0, // This will be filled in automatically
      "title": "" // This will be filled in automatically
    }
```

Then run the script to fetch the latest beacon version of all dApps: `node scripts/fetch-sdk-versions-from-dapps.js`

Note: Depending on the dApp, it might be necessary to add custom logic to `scripts/fetch-sdk-versions-from-dapps.js` to detect the SDK version.
