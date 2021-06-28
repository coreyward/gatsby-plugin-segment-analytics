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

const prodHandler = ({ location, prevLocation }, { eventName }) => {
  if (!window.analytics) return

  // Delay tracking to give `window` a chance of being updated
  window.setTimeout(() => {
    if (window.location.pathname === location.pathname) {
      // `window` has updated info, proceed with defaults
      window.analytics.page(eventName)
    } else {
      // `window` has not been updated yet; use Gatsby data to track
      window.analytics.page(eventName, {
        title: null,
        path: location.pathname,
        url: location.href,
        referrer: prevLocation?.href,
        search: location.search,
      })
    }
  }, 250)
}

export const onRouteUpdate =
  process.env.NODE_ENV === "production" ? prodHandler : devHandler
