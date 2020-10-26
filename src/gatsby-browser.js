const EVENT_NAME = process.env.PAGE_EVENT_NAME

const devHandler = ({ location }) => {
  if (!window.analytics || typeof window.analytics.page !== "function") {
    console.warn("Unable to locate analytics.js")
    return
  }

  // This doesn't mimic the call to page, but it is more informative
  window.analytics.page(EVENT_NAME ? EVENT_NAME : "Page", {
    path: location.pathname,
  })
}

const prodHandler = () => {
  window.analytics && window.analytics.page(EVENT_NAME)
}

exports.onRouteUpdate =
  process.env.NODE_ENV === "production" ? prodHandler : devHandler
