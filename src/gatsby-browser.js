const devHandler = ({ location }) => {
  if (!window.analytics || typeof window.analytics.page !== "function") {
    console.warn("Unable to locate analytics.js")
    return
  }

  // This doesn't mimic the call to page, but it is more informative
  window.analytics.page({ path: location.pathname })
}

const prodHandler = () => {
  window.analytics && window.analytics.page()
}

// Adding a 50ms delay ensure that the segment route tracking is in sync with the actual Gatsby route (otherwise you can end up in a state where the Segment page tracking reports the previous page on route change).
exports.onRouteUpdate =
  setTimeout(() => process.env.NODE_ENV === "production" ? prodHandler : devHandler, 50)
