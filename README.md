# gatsby-plugin-segment-analytics

A [Gatsby](https://www.gatsbyjs.org) plugin to add [Segment’s](https://segment.com/) Analytics.js integration.

## Usage

In your `gatsby-config.js`, add:

```js
module.exports = {
  plugins: [
    // your other plugins...
    {
      resolve: 'gatsby-plugin-segment-analytics',
      options: {
        writeKey: 'YOUR WRITE KEY'
      }
    }
  ]
}
```

## License

MIT
