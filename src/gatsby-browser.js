const devHandler = ({ location }, { eventName }) => {
  if (!window.analytics || typeof window.analytics.page !== "function") {
    console.warn("Unable to locate analytics.js")
    return
  }

  const args = [{ path: location.pathname }]
  if (eventName) args.unshift(eventName)

  // This doesn't mimic the call to page, but it is more informative
  window.analytics.page(...args)
}

const prodHandler = (_, { eventName }) => {
  window.analytics && window.analytics.page(eventName)
}

exports.onRouteUpdate =
  process.env.NODE_ENV === "production" ? prodHandler : devHandler
