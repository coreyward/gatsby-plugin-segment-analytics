# gatsby-plugin-segment-analytics

A [Gatsby](https://www.gatsbyjs.org) plugin to add
[Segment’s](https://segment.com/) Analytics.js integration.

This is designed to work with Gatsby versions ≥ 2.0.0.

## Installation

Install with yarn...

```sh
yarn add gatsby-plugin-segment-analytics
```

or NPM...

```sh
npm i gatsby-plugin-segment-analytics
```

### Configure

In your `gatsby-config.js`, add the `gatsby-plugin-segment-analytics` plugin and
provide your Segment Analytics.js write key as an option:

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-segment-analytics",
      options: {
        writeKey: "YOUR WRITE KEY",
      },
    },
  ],
}
```

## Usage

The latest version of the Segment tracking snippet will automatically be
generated and injected into the `<head>` of your layout using Gatsby's SSR API
hooks. When a page is loaded, and Gatsby's `onRouteUpdate` API is called,
`analytics.page` will be fired.

In development, `window.analytics` is a shim that simply logs calls to the
console rather than sending noise to Segment.

## Special Thanks

This plugin was forked from
[work by Stephen Mathieson](https://github.com/stephenmathieson/gatsby-plugin-segment).

## License

MIT
