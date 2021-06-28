import React from "react"
import { min as createSnippet } from "@segment/snippet"

// analytics.js stub
const devShim = `
  (function() {
    const analytics = (window.analytics = {})
    const methods = [
      "trackSubmit", "trackClick", "trackLink", "trackForm",
      "pageview", "identify", "reset", "group", "ready",
      "alias", "debug", "page", "once", "off", "on",
    ]

    methods.forEach(
      method =>
        (analytics[method] = (...args) =>
          console.log("analytics." + method, ...args))
    )

    analytics.track = (event, properties, options, callback) => {
      console.log("analytics.track", event, properties)
      setTimeout(callback, 300)
    }
  })()
`

export const onRenderBody = ({ setHeadComponents }, options) => {
  const { writeKey } = options
  const trackingSnippet =
    process.env.NODE_ENV === "production"
      ? createSnippet({ apiKey: writeKey, page: false })
      : devShim.toString()

  setHeadComponents([
    <script
      key="plugin-segment-analytics-js"
      dangerouslySetInnerHTML={{ __html: trackingSnippet }}
    />,
  ])
}
