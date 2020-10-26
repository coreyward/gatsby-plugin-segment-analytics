const devHandler = ({ location }) => {
  if (!window.analytics || typeof window.analytics.page !== "function") {
    console.warn("Unable to locate analytics.js")
    return
  }

  // This doesn't mimic the call to page, but it is more informative
  window.analytics.page("Blog Page", { path: location.pathname })
}

const prodHandler = () => {
  window.analytics && window.analytics.page("Blog Page")
}

exports.onRouteUpdate =
  process.env.NODE_ENV === "production" ? prodHandler : devHandler
